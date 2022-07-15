import React from 'react'

function OpeningHours() {
  return (
    <article className="lg:w-full rounded-lg shadow-lg p-6 pb-14 mt-5">
      <h4 className="underline font-bold"> OPENING HOURS & PROGRAMMES</h4>
      <br />
      <div>
        <span className="font-bold">Farm Shop hours:</span>
        <p>Wednesdays, 10am-4pm</p>
        <p>Saturdays, 9am-12pm</p>
      </div>
      <br />
      <div>
        <span className="font-bold">Volunteer days:</span>
        <p>Fridays, 9am-1.30pm</p>
        <p>Saturdays, 9am-12pm</p>
        <ul className="list-disc list-inside">
          <li>Volunteering- by registration or sign up to join in</li>
          <li> Education Team- contact our Education Manager</li>
        </ul>
      </div>
      <br />
      <div>
        <span className="font-bold">Visiting with us:</span>
        <ul className="list-disc list-inside">
          <li>Casual visits - 7 days a week</li>
          <li> Groups - by booking, learn more or make an enquiry</li>
          <li>
            Corporate & team experiences - by booking, learn more or make an
            enquiry
          </li>
        </ul>
      </div>
      <br />
      <div>
        <span className="font-bold ">Education Programme:</span>
        <ul className="list-disc list-inside">
          <li>Contact our Education Manager via our email</li>
        </ul>
      </div>
      <br />
      <div>
        <span className="font-bold">Workshops Programme:</span>
        <ul className="list-disc list-inside">
          <li>Enquire about a private group workshops via email</li>
          <li>Contact our Education Manger via email</li>
        </ul>
      </div>
    </article>
  )
}

export default OpeningHours
