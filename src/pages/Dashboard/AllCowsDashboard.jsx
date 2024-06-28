import { useEffect, useState } from "react";
import CowCardDashboard from "../../components/CowCardDashboard";
import { apiBaseUrl } from "../../config";
import LoadingSpinner from "../../components/LoadingSpinner";

const AllCowsDashboard = () => {
  const [cows, setCows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${apiBaseUrl}/cows`)
      .then((res) => res.json())
      .then((data) => {
        setCows(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (_id) => {
    setCows(cows.filter((cow) => cow._id !== _id));
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="container mx-auto justify-center grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cows.map((cow) => (
            <CowCardDashboard key={cow._id} cow={cow} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllCowsDashboard;
