/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CowSearchContext = createContext(null);

const SearchContext = ({ children }) => {
  const [cows, setCows] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredCows, setFilteredCows] = useState([]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);

    const filteredResults = cows.filter((cow) =>
      cow.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCows(filteredResults);

    console.log(filteredCows);
  };

  useEffect(() => {
    axios.get("https://cow-bazar-server.onrender.com/cows").then((res) => setCows(res.data));
  }, []);

  const value = {
    cows,
    setCows,
    handleSearch,
    searchText,
    setSearchText,
    filteredCows,
    setFilteredCows,
  };

  return (
    <CowSearchContext.Provider value={value}>
      {children}
    </CowSearchContext.Provider>
  );
};

export default SearchContext;
