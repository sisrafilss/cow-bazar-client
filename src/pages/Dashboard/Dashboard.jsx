import axios from "axios";
import useAuth from "../../hooks/useAuth";

import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { apiBaseUrl } from "../../config";
import LoadingSpinner from "../../components/LoadingSpinner";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { user, logOut } = useAuth();
  const cows = useLoaderData();
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    setLoading(true);
    const url = `${apiBaseUrl}/user/${user?.email}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get(url, config).then((response) => {
      setUserInfo(response?.data);
      setLoading(false);
    });
  }, [token, user?.email]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/3 lg:w-1/2 mx-auto mt-8">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center mb-6">
                <img
                  src={userInfo?.photoURL}
                  alt={userInfo?.name}
                  className="h-16 w-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">{userInfo?.name}</h2>
                  <p className="text-gray-600">{userInfo?.email}</p>
                </div>
              </div>
              <div className="mb-4">
                {userInfo?.contactNumber && (
                  <p className="text-gray-700">
                    <span className="font-semibold">Contact Number:</span>{" "}
                    {userInfo?.contactNumber}
                  </p>
                )}
                {userInfo?.address && (
                  <p className="text-gray-700">
                    <span className="font-semibold">Address:</span>{" "}
                    {userInfo?.address}
                  </p>
                )}
                {userInfo?.age && (
                  <p className="text-gray-700">
                    <span className="font-semibold">Age:</span> {userInfo?.age}
                  </p>
                )}
              </div>
            </div>
            <Link
              to={`profile/edit/${userInfo?._id}`}
              className="btn btn-primary"
            >
              Edit Profile
            </Link>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-gray-700">
                Total Added Cows:{" "}
                <span className="text-lg font-bold text-gray-900">
                  {cows?.length}
                </span>
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-gray-700">
                Other Informations:
              </p>
              {/* <p className="text-lg font-bold text-gray-900">Nothing to Show!</p> */}
            </div>
            <button
              onClick={logOut}
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
