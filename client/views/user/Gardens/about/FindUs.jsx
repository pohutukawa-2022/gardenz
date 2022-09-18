import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useGarden from '../../../../hooks/useGarden'

const FindUs = ({ name, address, email, phone }) => {
  const { id } = useParams()
  useGarden(id)
  return (
    <article className="rounded-lg shadow-lg p-6">
      <h4 className="underline font-bold"> FIND US</h4>
      <p>
        {name} is located at {address}
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
      <div>
        <span className="font-bold">
          {/* need to make link dynamic via id of garden*/}
          <Link to={`/gardens/${id}/signup`}>Sign up to our Newsletter</Link>
          {/* If loged uin as a user will show if not signed up */}
          {/* You are Signed up to our NewLetter */}
          {/* will show if you are signed up already */}
        </span>
      </div>
    </article>
  )
}

export default FindUs
