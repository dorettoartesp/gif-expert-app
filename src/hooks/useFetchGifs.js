import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({ data: imgs, loading: false })
    })
  }, [category])

  // const gifs = await getGifs()
  // setState({
  //   data: gifs,
  //   loading: false,
  // })

  return state
}
