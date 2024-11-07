import React from 'react'

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
    </div>
  )
}

export default NotFound
