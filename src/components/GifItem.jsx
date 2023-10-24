import React from 'react'

// eslint-disable-next-line react/prop-types
const GifItem = ({ title, url }) => {
  return (
    <div className=' p-[2px] '>
      <div style={{ backgroundImage: `url(${url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className=' w-full  h-36 sm:h-48 flex flex-col items-center justify-center  ' >

      </div>
      <p className='font-semibold' >{title}</p>
    </div>
  )
}

export default GifItem
