import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GiftExportApp = () => {
  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon Ball',
  ])

  // const handleAdd = () => {
  //   setCategories((prevState) => [...prevState, 'HunterXHunter'])
  // }

  return (
    <>
      <h1>GiftExportApp</h1>
      <hr />

      <AddCategory setCategories={setCategories} />

      <div>
        {categories.map((category, i) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  )
}

export default GiftExportApp
