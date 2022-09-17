import { Link } from "react-router-dom";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-5 flex flex-wrap sm:justify-between justify-center items-center border-b dark:bg-gray-700 dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/" className="items-center align-middle">
          <p className="text-2xl text-sky-400 font-bold py-1 px-2">Surf</p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-lg text-white px-1 py-2 bg-blue-400 dark:bg-sky-400 rounded-lg"
        >
          {darkTheme ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </div>
  );
};
