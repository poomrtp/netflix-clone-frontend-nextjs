import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'

import { Movie } from '../types/movie.type'
import Thumbnail from './Thumbnail'

interface Props {
  title: string,
  movies: Movie[]
}

const RowMovieList = ({ title, movies }: Props) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2
        className="w-56 text-gray-200 text-xl font-bold 
          cursor-pointer transition duration-200
          hover:text-white">
        {title}
      </h2>
      <div className="relative group md:-ml-2">
        <ChevronLeftIcon
          className="absolute top-0 bottom-0 left-2 z-20 m-auto h-9 w-9
            text-gray-50 cursor-pointer opacity-0 
            transition
            hover:scale-125 group-hover:opacity-100" />
        <div className="flex items-center space-x-0.5
          overflow-x-scroll scrollbar-hide
          md:space-x-2.5 md:p-2">
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className="absolute top-0 bottom-0 left-2 z-20 m-auto h-9 w-9
            text-gray-50 cursor-pointer opacity-0
            transition
            hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  )
}

export default RowMovieList