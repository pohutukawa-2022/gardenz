import React, { useState } from 'react'
import { dispatch } from '../../../../store'
import { showError } from '../../../../slices/waiting'
import { deleteImgById } from './AdminGalleryHelper'

export default function AdminGalleryImage({ loadImages, image }) {
  const [isClicked, setIsClicked] = useState(false)

  function handleClickDelete() {
    setIsClicked(!isClicked)
  }

  function handleNoDelete() {
    setIsClicked(!isClicked)
  }

  async function handleConfirmDelete() {
    try {
      await deleteImgById(image.id, image.gardenId)
      loadImages()
    } catch (error) {
      dispatch(showError(error.message))
    }
  }

  return (
    <>
      <div className="inline-block relative ">
        <div className="inline-block relative z-0">
          <img
            className="m-3 object-cover h-48 w-48"
            src={image.url}
            alt="rrr"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-7 h-7 absolute top-4 right-4"
            data-testid="button"
            onClick={handleClickDelete}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-8 h-8 absolute top-4 left-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-8 h-8 absolute bottom-4 right-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        {isClicked && (
          <div
            data-testid="confirmationDialog"
            className="ease-in pt-16 align-middle text-center inline-block bg-slate-200 opacity-90 absolute left-0 z-1  w-full h-full"
          >
            <p className="text-black font-medium opacity-100">Delete?</p>
            <div className="flex justify-center mt-1 ">
              <button
                data-testid="Yes"
                onClick={handleConfirmDelete}
                className="mr-2 opacity-100  block mt-0 p-2 text-center rounded-md text-white bg-orange transition ease-in-out hover:bg-orange hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Yes
              </button>
              <button
                data-testid="No"
                onClick={handleNoDelete}
                className="mr-2 opacity-100  block mt-0 p-2 text-center rounded-md text-white bg-orange transition ease-in-out hover:bg-orange hover:-translate-y-1 hover:scale-110 duration-300"
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
