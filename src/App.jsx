import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { SearchResult } from "./components/SearchResult/SearchResult";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-700 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <SearchResult />
        <Footer />
      </div>
    </div>
  );
}

export default App;
