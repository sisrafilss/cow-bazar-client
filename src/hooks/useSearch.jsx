import { useContext } from "react";
import { CowSearchContext } from "../contexts/SearchContext";

const useSearch = () => {
  const searchContext = useContext(CowSearchContext);
  return searchContext;
};

export default useSearch;
