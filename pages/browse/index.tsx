
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

import requests from '../../utils/movie.service'
import { Movie } from '../../types/movie.type'
import RowMovieList from '../../components/RowMovieList'

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Browse = ({
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries
  }: Props) => {
  // console.log(netflixOriginals)
  return (
    <div className="bg-gradient-to-t from-[#141414] h-[50vh]  lg:h-[100vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="relative pl-4 pb-24 space-y-16 lg:pl-16">
        {/* Banner */}
        <Banner trendingNow={trendingNow} />
        <section className="space-y-12 md:space-y-24">
          {/* Row */}
          <RowMovieList title="Trainding Now" movies={trendingNow} />
          <RowMovieList title="Top Rated" movies={topRated} />
          <RowMovieList title="Action Movies" movies={actionMovies} />
          <RowMovieList title="Comedy Movies" movies={comedyMovies} />
          <RowMovieList title="Horror Movies" movies={horrorMovies} />
          <RowMovieList title="Romance Movie" movies={romanceMovies} />
          <RowMovieList title="Netflix Originals" movies={netflixOriginals} />
          <RowMovieList title="Documentaries" movies={documentaries} />
        </section>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Browse

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results
    },
  }
}