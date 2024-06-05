/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
const NoResults = ({ searchText }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 my-4 border border-gray-300 rounded-lg bg-gray-50">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        No Results Found
      </h2>
      <p className="text-gray-600">
        We couldn't find any results for "{searchText}". Please try a different
        search term.
      </p>
    </div>
  );
};

export default NoResults;
