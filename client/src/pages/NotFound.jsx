import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components'

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-white text-9xl font-semibold">
        Opps<span className="text-green-600">!</span>
      </div>
      <h2 className="text-white mt-10 text-3xl font-semibold">
        404 - Page not found
      </h2>
      <p className="text-white mt-6 text-center">
        The page you are looking for might have been removed,
      </p>
      <p className="text-white text-center">
        had its name changed, or is temporarily unavailable.
      </p>

     <Link to="/"> <Button
              label="Go to home"
              styles="flex items-center justify-center mt-10 bg-white dark:bg-transparent text-black dark:text-white px-5 py-2.5 rounded-full border border-gray-300 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600"
              onClick={() => {}}
            /></Link>
    </div>
  )
}

export default NotFound
