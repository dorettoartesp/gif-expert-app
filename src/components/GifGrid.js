import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([])

  // useEffect(() => {
  //   getGifs(category).then(setImages)
  //   console.log('use effect called')
  // }, [category])

  const { loading, data: images } = useFetchGifs(category)

  return (
    <>
      <h3 className=" animate_animated animate__fadeIn">Category {category}</h3>
      {loading && (
        <p className=" animate_animated animate__flash">Loading...</p>
      )}
      <div className="card-grid">
        {images.length &&
          images.map((image) => {
            return <GifGridItem key={image.id} {...image} />
          })}
      </div>
    </>
  )
}
