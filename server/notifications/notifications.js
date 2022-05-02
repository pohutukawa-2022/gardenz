const { encode } = require('./emailTokens')
const log = require('../logger')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

const SENDGRID_EMAIL_FROM = process.env.SENDGRID_EMAIL_FROM
const SENDGRID_EMAIL_REPLY = process.env.SENDGRID_EMAIL_REPLY
const SENDGRID_TEMPLATE_ID = process.env.SENDGRID_TEMPLATE_ID

function sendNotification(userdata, eventdata) {
  const token = encode({
    userId: userdata.id,
    eventId: eventdata.id,
    gardenId: eventdata.gardenId,
  })
  const http = require('https')

  const options = {
    method: 'POST',
    hostname: 'api.sendgrid.com',
    port: null,
    path: '/v3/mail/send',
    headers: {
      authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      'content-type': 'application/json',
    },
  }

  const req = http.request(options, function (res) {
    const chunks = []

    res.on('data', function (chunk) {
      chunks.push(chunk)
    })

    res.on('end', function () {
      const body = Buffer.concat(chunks)
      log(body.toString())
    })
  })

  req.write(
    JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: userdata.email,
              name: userdata.firstName,
            },
          ],
          dynamic_template_data: {
            name: userdata.firstName,
            id: userdata.id,
            title: eventdata.title,
            date: eventdata.date,
            description: eventdata.description,
            volunteersneeded: eventdata.volunteersNeeded,
            token: token,
          },
          subject: 'New event in the garden!',
        },
      ],
      from: {
        email: SENDGRID_EMAIL_FROM,
        name: 'Gardenz',
      },
      reply_to: {
        email: SENDGRID_EMAIL_REPLY,
        name: 'Gardenz',
      },
      template_id: SENDGRID_TEMPLATE_ID,
    })
  )
  req.end()
}

module.exports = {
  sendNotification,
}
