import { Link } from "react-router-dom";

const Logo = ({ type }) => {
  return (
    <div>
      <Link
        to='/'
        className={`text-2xl font-semibold ${type ? "text-white text-4xl" : "dark:text-white"}`}
      >
        Blog
        <span
          className={`text-3xl text-green-600 ${type ? "text-5xl font-bold" : ""}`}
        >
          Site
        </span>
      </Link>
    </div>
  );
};

export default Logo;
