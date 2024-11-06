import React from 'react';
import { Link } from "react-router-dom";

const Logo = ({ type }) => {
  return (
    <div>
      <Link 
        to='/' 
        className={`text-2xl font-semibold dark:text-white ${type ? "text-white text-4xl" : ""}`}
      >
        Blog 
        <span className={`text-3xl text-green-600 ${type ? "text-5xl font-bold" : ""}`}>
          Site
        </span>
      </Link>
    </div>
  );
}

export default Logo;
