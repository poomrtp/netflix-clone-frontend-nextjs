import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return (() => {
      window.removeEventListener('scroll', handleScroll)
    })
  }, [])
  const profileImage = 'https://occ-0-1223-64.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABa9ZYTgCbowf-j68aYx3VhymUJgevNv4HTHji_Bgyn0RDikCSVdPi1qcE12LxIUUA9e4oX8p2UsfQfPxjvewhkg.png?r=870'
  return (
    <nav
      className={`fixed
        top-0 z-40
        w-full
        flex items-center justify-between
        py-4 px-8 md:py-5 md:px-16
        transition duration-700
        ${isScrolled ? 'bg-color-dark' : 'header-default-bg-color-dark'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={90}
          height={90}
          className="cursor-pointer object-contain"
          alt="band-logo" />
        <ul className="hidden space-x-4 text-white md:flex">
          <li className="header-link">Home</li>
          <li className="header-link">TV Shows</li>
          <li className="header-link">Movies</li>
          <li className="header-link">New & Popular</li>
          <li className="header-link">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 header-icon sm:inline" />
        <BellIcon className="hidden h-6 w-6 header-icon sm:inline" />
        <Link href="/account">
          <img
            src={profileImage}
            alt=""
            className="cursor-pointer rounded" />
        </Link>
      </div>
    </nav>
  )
}

export default Header