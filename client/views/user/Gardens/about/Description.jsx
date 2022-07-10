import React from 'react'

const Description = ({ name, description }) => {
  return (
    <article className="lg:w-full rounded-md shadow-lg p-4 pb-6">
      <p>
        <span className="font-extrabold">{name} </span>
        is {description}
      </p>
      {/* <p>
  Visit our site{' '}
  <a className="underline hover:underline-offset-1" href={url}>
    {url}
  </a>
</p> */}
    </article>
  )
}

export default Description
