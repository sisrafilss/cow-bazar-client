import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useSearch from "../hooks/useSearch";
import CowSearchResult from "../components/CowSearchResult";
import NoResults from "../components/NoResults";

const MainLayout = () => {
  const { searchText, filteredCows } = useSearch();

  const searchResult =
    searchText && filteredCows?.length ? (
      <CowSearchResult cows={filteredCows} />
    ) : (
      <NoResults searchText={searchText} />
    );

  return (
    <div>
      <Navbar />
      {searchText ? searchResult : <Outlet />}

      <Footer />
    </div>
  );
};

export default MainLayout;
