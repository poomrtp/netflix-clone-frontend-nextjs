import React from 'react'

const Header = () => {
  return (
    <nav className="bg-black">
      <div className="flex items-center space-x-2 md:space-x-10 py-5 px-14">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="band-logo" />
        <ul className="hidden space-x-4 text-white md:flex">
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
    </nav>
  )
}

export default Header