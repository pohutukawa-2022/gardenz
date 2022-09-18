import React from 'react'
import { useParams } from 'react-router-dom'

import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'
import NewsSignUpForm from '../../../../subcomponents/NewsSignUp/NewsSignUpForm'

export default function SignUp() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <main className="container lg:flex mx-auto mt-5">
        {/* Left Side Div */}
        <div className="container md:flex flex-col my-6 mx-10 mr-20">
          {/* <Description name={name} description={description} /> */}
          <NewsSignUpForm />
        </div>
        {/* Right Side Div  */}
        <div className="flex flex-col mt-5"></div>
      </main>
    </>
  )
}
