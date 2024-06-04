import CowCardDashboard from "../../components/CowCardDashboard";
import { useEffect, useState } from "react";

const AllCows = () => {
  const [cows, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cows")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteCow = (id) => {
    setProducts(cows.filter((cow) => cow._id !== id));
  };

  return (
    <div className="container mx-auto justify-center grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {cows.map((cow) => (
        <CowCardDashboard
          key={cow._id}
          cow={cow}
          onDelete={handleDeleteCow}
        />
      ))}
    </div>
  );
};

export default AllCows;
