import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'

export default function ShareButton({ id }) {
  return (
    <>
      <FacebookShareButton url={`${window.location.href}#${id}`}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={`${window.location.href}#${id}`}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </>
  )
}
