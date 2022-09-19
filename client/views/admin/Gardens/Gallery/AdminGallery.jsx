import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGalleryById } from './AdminGalleryHelper'
import { showError } from '../../../../slices/error'
import AdminGalleryImage from './AdminGalleryImage.jsx'

function AdminGallery() {
  const { id } = useParams()

  const [imageList, setImageList] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    loadImages()
  }, [])

  function loadImages() {
    getGalleryById(id)
      .then((images) => {
        setImageList(images)
      })
      .catch((err) => {
        dispatch(showError(err.message))
        return false
      })
  }
  return (
    <>
      <div className="flex m-5">
        <h1 className="text-2xl leading-tight font-serif ">We are here!!!!</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="orange"
          className="w-6 h-6 mt-1 ml-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {imageList.map((image) => (
        <AdminGalleryImage
          loadImages={loadImages}
          key={image.id}
          image={image}
        />
      ))}
    </>
  )
}

export default AdminGallery
