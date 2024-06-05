/* eslint-disable react/prop-types */
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const CowCardDashboard = ({ cow, onDelete }) => {
  const { _id, title, description, price, age, rating, image_url } = cow;
  const token = localStorage.getItem("token");

  const handleDeleteCow = () => {
    const userConfirmed = window.confirm(
      `Are you sure you want to delete "${title}"?`
    );
    if (userConfirmed) {
      axios
        .delete(`https://cow-bazar-server-zeta.vercel.app/cows/${_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data) {
            if (res.data?.deletedCount) {
              toast.success("Cow deleted!");
              onDelete(_id);
            }
          }
        });
    }
  };

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
          rating={Number(rating)}
          starRatedColor="gold"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="2px"
        />
      </div>

      <div className="flex justify-around p-4">
        <Link to={`${_id}`} className="btn btn-primary btn-sm rounded">
          Details
        </Link>
        <Link
          to={`edit/${_id}`}
          className="btn btn-success text-white btn-sm rounded"
        >
          Edit
        </Link>
        <button
          onClick={handleDeleteCow}
          className="btn btn-warning btn-sm rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CowCardDashboard;
