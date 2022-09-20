import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'

export default function ShareButton({ id, href }) {
  return (
    <>
      <FacebookShareButton url={`${href}#${id}`}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={`${href}#${id}`}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </>
  )
}
