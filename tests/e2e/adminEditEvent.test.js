const { chromium } = require('playwright')
const config = require('../../server/db/knexfile').development
const db = require('knex')(config)
const { serverUrl } = require('./index')
const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '../../server/.env') })

jest.setTimeout(20000)

let browser
let page
beforeAll(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 500 })
  await db.migrate.latest({ directory: './server/db/migrations' })
})

beforeEach(async () => {
  const context = await browser.newContext()
  page = await context.newPage()
  await db.seed.run({ directory: './server/db/seeds' })
})

afterEach(async () => {
  await page.close()
})

afterAll(async () => {
  await browser.close()
  return db.destroy()
})

// Test goes here
test('Admin can login & edit an event', async () => {
  // going to localhost:3000
  await page.goto(serverUrl)

  // clicking on sign In
  await Promise.all([page.waitForNavigation(), page.click('text=Sign in')])

  // checking if the url changes to /signin
  expect(await page.url()).toContain(
    'https://gardenz.au.auth0.com/u/login?state='
  )

  const testEmail = process.env.E2E_TEST_AUTH0_ADMIN_EMAIL
  const testPassword = process.env.E2E_TEST_AUTH0_ADMIN_PASSWORD
  const testFirstName = process.env.E2E_TEST_ADMIN_FIRST_NAME
  const testLastName = process.env.E2E_TEST_ADMIN_LAST_NAME
  const testGarden = process.env.E2E_TEST_ADMIN_GARDEN_ID

  await page.fill('#username', testEmail)
  await page.fill('#password', testPassword)

  await Promise.all([
    page.waitForNavigation(),
    page.click('button[type=submit]', { force: true }),
  ])

  await page.waitForSelector('text=Log out')
  expect(await page.content()).toMatch(/Log out/)

  await Promise.all([page.waitForNavigation(), page.click('text=My Profile')])

  await page.fill('#firstName', testFirstName)
  await page.fill('#lastName', testLastName)
  await page.selectOption('#garden', testGarden)

  await Promise.all([
    page.waitForNavigation(),
    page.click('button[type=submit]', { force: true }),
  ])

  await Promise.all([page.waitForNavigation(), page.click('text=My Garden')])

  await page.click('text=Hanging out')
  await page.waitForSelector('text=Edit Event')

  await Promise.all([page.waitForNavigation(), page.click('text=Edit Event')])
  expect(await page.url()).toBe(`${serverUrl}/events/4/edit`)

  await page.fill('[type=date]', '2000-01-01')
  await page.fill('[type=number]', '1')

  await Promise.all([page.waitForNavigation(), page.click('text=Submit')])

  await page.click('text=Hanging out')
  await page.waitForSelector('text=Edit Event')

  expect(await page.url()).toBe(`${serverUrl}/gardens/1`)
  expect(await page.$eval('ul', (el) => el.textContent)).toMatch('01/01/2000')
  expect(await page.$eval('ul', (el) => el.textContent)).toMatch(
    '1 of 1 volunteers still needed'
  )

  await page.click('text=Log Out')
})
