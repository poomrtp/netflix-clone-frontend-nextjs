import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Movie } from '../types/movie.type'

interface Props {
  trendingNow: Movie[]
}

const Banner = ({ trendingNow }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  useEffect(() => {
    setMovie(trendingNow[Math.floor(Math.random() * trendingNow.length)])
  }, [trendingNow])
  const baseImageUrl = process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL
  console.log(baseImageUrl)
  return (
    <div>
      <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"/>
      </div>
    </div>
  )
}

export default Banner