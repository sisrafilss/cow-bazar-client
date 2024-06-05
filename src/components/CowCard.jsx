/* eslint-disable react/prop-types */
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const CowCard = ({ cow }) => {
  const { _id, title, description, price, age, rating, image_url } = cow;

  return (
    <div className="card card-compact max-w-80 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={image_url} alt={title} />
      </figure>
      <div className="card-body text-center space-y-3">
        <h2 className="card-title font-semibold">{title}</h2>
        <div className="flex justify-between">
          <h3 className="text-base font-semibold text-gray-500">
            Price: <span className="text-green-700">${price}</span>
          </h3>
          <p className="text-base font-semibold text-gray-500">
            Age: <span className="text-green-600">{age} years</span>
          </p>
        </div>
        <p>{description}</p>
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="2px"
        />
      </div>
      <Link
        to={`/all-cows/${_id}`}
        className="btn btn-primary w-full rounded-none rounded-b-xl"
      >
        See Details
      </Link>
    </div>
  );
};

export default CowCard;
