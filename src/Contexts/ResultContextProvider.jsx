import { createContext, useContext, useState } from "react";

const ResultContext = createContext()
const baseURL = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("JavaScript");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseURL}${type}`,{
      method:'GET',
      headers:{
        'x-user-agent': 'desktop',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': 'aa715b41a7msh3d02d1b5b29da96p15a0ccjsn9f7aa09e5374',
      }
    });
    const data = await response.json();
    setResults(data);
    setIsLoading(false)

    console.log(data)
  }
  return(
    <ResultContext.Provider value={{getResults, results, setSearchTerm, searchTerm, isLoading}}>
      {children}
    </ResultContext.Provider>
  )
};

export const useResultContext = () => useContext(ResultContext);