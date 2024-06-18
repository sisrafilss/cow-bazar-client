
import { useEffect, useState } from "react";
import CowCard from "../components/CowCard";
import { apiBaseUrl } from "../config";

const AllCows = () => {
  const [cows, setCows] = useState([]);

  useEffect(() => {
    fetch(`${apiBaseUrl}/cows`)
      .then((res) => res.json())
      .then((data) => setCows(data));
  }, []);

  return (
    <div className="container mx-auto justify-center grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cows.map((cow) => (
        <CowCard key={cow._id} cow={cow} />
      ))}
    </div>
  );
};

export default AllCows;
