import React from 'react'

const FindUs = ({ name, address, email, phone }) => {
  return (
    <article className="rounded-md shadow-lg p-6 mt-5">
      <h4 className="underline font-bold"> FIND US</h4>
      <p>
        {name} is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat {address}
      </p>
      <div className="flex flex-row my-14">
        <div className="mr-12">
          <span className="font-bold">EMAIL</span>
          <p>{email}</p>
        </div>

        <div>
          <span className="font-bold">TELEPHONE</span>
          <p>{phone}</p>
        </div>
      </div>
    </article>
  )
}

export default FindUs
