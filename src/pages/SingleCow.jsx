import { useLoaderData } from "react-router-dom";

const SingleCow = () => {
  const cow = useLoaderData();

  console.log(cow);

  return (
    <div className="max-w-4xl mx-auto p-4 my-16">
      <div className="bg-white  rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="w-full h-64 object-cover md:w-64 md:h-auto"
              src={cow?.image_url}
              alt={cow?.title}
            />
          </div>
          <div className="p-8 space-y-3">
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              {cow?.title}
            </h1>
            <h3 className="text-base font-semibold text-gray-500">
              Price: <span className="text-green-700">${cow?.price}</span>
            </h3>
            <p className="text-base font-semibold text-gray-500">
              Breed: <span className="text-green-600">{cow?.breed}</span>
            </p>
            <p className="text-base font-semibold text-gray-500">
              Weight: <span className="text-green-600">{cow?.weight} KG</span>
            </p>
            <p className="text-base font-semibold text-gray-500">
              Location: <span className="text-green-600">{cow?.location}</span>
            </p>
            <p className="mt-4 text-gray-700">{cow?.description}</p>
            <p className="mt-4 text-gray-700">{cow?.long_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCow;
