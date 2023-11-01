import React from 'react'
import GifItem from './GifItem'
import useFetchGifs from '../hooks/useFetchGifs'

// eslint-disable-next-line react/prop-types
const GifGrid = ({ category }) => {
  const { images } = useFetchGifs(category)

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
