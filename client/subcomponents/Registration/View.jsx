import React from 'react'

export function View(props) {
  const garden = props.garden
  const { firstName, lastName, email } = props.user

  return (
    <>
      <h1 className="text-xl text-gray-500 mb-2">Profile</h1>
      <ul>
        <li>
          {firstName} {lastName}
        </li>
        <li>{email}</li>
      </ul>
      <h2 className="text-l text-gray-500 my-2">Your Garden:</h2>
      <ul>
        <li>{garden.name}</li>
        <li>{garden.address}</li>
      </ul>
    </>
  )
}
