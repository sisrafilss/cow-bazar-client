import { useEffect } from "react";
import CowCard from "../CowCard";
import axios from "axios";
import { useState } from "react";

const TopCows = () => {
  const [cows, setCows] = useState([]);

  useEffect(() => {
    axios
      .get("https://cow-bazar-server.onrender.com/cows")
      .then((res) => setCows(res.data));
  }, []);

  return (
    <div className="my-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-6">Top Rated Cows</h2>
        <p className="max-w-xl mx-auto">
          Explore Our Best Selections Handpicked for Quality and Excellence
        </p>
      </div>
      <div className="container mx-auto justify-center grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cows.slice(0, 4).map((cow) => (
          <CowCard key={cow._id} cow={cow} />
        ))}
      </div>
    </div>
  );
};

export default TopCows;
