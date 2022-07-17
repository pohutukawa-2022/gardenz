import React from 'react'
import { useSelector } from 'react-redux'

import { hide } from './errorHelper'

export default function Error() {
  const error = useSelector((globalState) => globalState.error)

  return error ? (
    <article className="alert-container" role="alert">
      <section className="alert-msg">
        <p>{error}</p>
      </section>
      <button className="alert-close" onClick={hide}>
        &#10005;
      </button>
    </article>
  ) : null
}
