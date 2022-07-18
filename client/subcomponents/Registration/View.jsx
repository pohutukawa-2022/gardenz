import React from 'react'

export function View(props) {
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
    </>
  )
}
