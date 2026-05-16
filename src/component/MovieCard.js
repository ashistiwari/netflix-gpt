import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div>
            <div className='w-48'>
              <img alt="MovieCard Image" src={IMG_CDN_URL + posterPath} />
            </div>
        
    </div>
  )
}

export default MovieCard