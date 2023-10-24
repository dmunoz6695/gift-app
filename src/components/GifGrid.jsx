import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import GifItem from './GifItem'

// eslint-disable-next-line react/prop-types
const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])
  const getImages = async () => {
    const newImages = await getGifs(category)
    setImages(newImages)
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4' >
        {

          images.map((image) => (
            <GifItem
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>

  )
}

export default GifGrid
