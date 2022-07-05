import React from 'react'
import { useSelector } from 'react-redux'

export default function WaitIndicator() {
  const waiting = useSelector((globalState) => globalState.waiting)

  const absoluteCentering = {
    transform: 'translate(-50%, -50%)',
  }

  return (
    <div
      className="flex absolute left-2/4 top-2/4 translate-y-2/4 translate-x-2/4"
      style={absoluteCentering}
    >
      {waiting ? (
        <>
          <img
            src="/images/loadingIcon.png"
            alt="loading indicator"
            className="w-1/2"
          />
          <img
            src="/images/loadingIcon.png"
            alt="loading indicator"
            className="w-1/2"
          />
          <img
            src="/images/loadingIcon.png"
            alt="loading indicator"
            className="w-1/2"
          />
        </>
      ) : (
        '\u00a0'
      )}
    </div>
  )
}
