/* eslint-disable react/prop-types */

import CowCard from "./CowCard";


const CowSearchResult = ({ cows }) => {
  return (
    <div className="container mx-auto justify-center grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {cows.map((cow) => (
        <CowCard key={cow._id} cow={cow} />
      ))}
    </div>
  );
};

export default CowSearchResult;
