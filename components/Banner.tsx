import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Movie } from '../types/movie.type'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/outline'

interface Props {
  trendingNow: Movie[]
}

const Banner = ({ trendingNow }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  useEffect(() => {
    setMovie(trendingNow[Math.floor(Math.random() * trendingNow.length)])
  }, [trendingNow])
  const baseImageUrl = process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL
  return (
    <div className="flex flex-col space-y-2 pt-16 pb-2 lg:h-[80vh] lg:justify-end md:space-y-4">
      <div className="absolute top-0 left-0 h-[50vh] lg:h-[100vh] w-screen -z-20 ">
        <Image
          src={`${baseImageUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"/>
      </div>
      <h1 className="text-2xl text-white font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p
        className="max-w-xs text-xs text-white text-shadow-lg mt-2
          md:max-w-lg md:text-lg lg:max-w-2xl lg:text-3xl">
        {movie?.overview}
      </p>
      <div className="flex text-white space-x-2">
        <button
          className="flex items-center gap-x-2
          text-black text-sm font-semibold
            rounded px-8 py-2
            transition
            bg-white
            md:text-xl
            hover:opacity-75">
          <FaPlay className="h-4 w-4 md:h-5 md:w-5"/>
          Play
        </button>
        <button className="flex items-center gap-x-2
          text-white text-sm font-semibold
            rounded px-8 py-2
            transition
            bg-[gray]/70
            md:text-xl
            hover:opacity-75">
          <InformationCircleIcon className="h-4 w-4 md:h-7 md:w-7"/>
          More Info
        </button>
      </div>
    </div>
  )
}

export default Banner