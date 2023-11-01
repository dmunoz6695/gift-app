import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

const useFetchGifs = (category) => {
  const [images, setImages] = useState([])

  const getImages = async () => {
    const newImages = await getGifs(category)
    setImages(newImages)
  }

  useEffect(() => {
    getImages()
  }, [])

  return {
    images
  }
}

export default useFetchGifs
