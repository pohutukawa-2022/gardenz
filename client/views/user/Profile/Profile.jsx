import React from 'react'
import { useSelector } from 'react-redux'
import Register from '../../../subcomponents/Registration/Register'
import { View } from '../../../subcomponents/Registration/View'

export default function Profile() {
  const user = useSelector((globalState) => globalState.user)
  const garden = useSelector((globalState) => globalState.garden)

  return (
    <section className="container px-6 mx-auto">
      <div className="flex flex-col text-center md:text-left md:flex-row justify-evenly md:items-center">
        <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
          <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
            {user.gardenId ? (
              <View user={user} garden={garden} />
            ) : (
              <Register user={user} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
