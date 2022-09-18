import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getGalleryById } from './AdminGalleryHelper'
import { showError } from '../../../../slices/error'
import AdminGalleryImage from './AdminGalleryImage.jsx'

function AdminGallery() {
  const { id } = useParams()

  const [imageList, setImageList] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    getGalleryById(id)
      .then((images) => {
        setImageList(images)

        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
        return false
      })
  }, [])
  console.log("list of the images ", imageList)
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
        <AdminGalleryImage key={image.id} image={image} />
      ))}
    </>
    // <section className="container flex mx-auto">
    //   <ul className="w-full grid grid-cols-4 gap-4 mt-20">
    //     {gardenList.map((garden) => {
    //       return (
    //         <li key={garden.id} className="grid">
    //           <Link
    //             to={`/admin/gardens/${garden.id}/menu`}
    //             className="p-6 text-center rounded-md border-2 border-blue hover:bg-blue hover:text-white transition ease-in-out hover:bg-blue hover:-translate-y-1 hover:scale-100 hover:bg-blue duration-300"
    //           >
    //             <i className="fa-solid fa-seedling m-5 text-8xl text-orange"></i>
    //             <h2 className="font-sans text-2xl">{garden.name}</h2>
    //           </Link>
    //         </li>
    //       )
    //     })}
    //   </ul>
    // </section>
  )
}

export default AdminGallery
