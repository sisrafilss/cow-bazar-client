import axios from "axios";
import useAuth from "../../hooks/useAuth";

import { useEffect, useState } from "react";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { user, logOut } = useAuth();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const url = `http://localhost:5000/user/${user?.email}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get(url, config).then((response) => {
      setUserInfo(response?.data);
    });
  }, [token, user?.email]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4">
          <img
            src={userInfo?.photoURL}
            alt={`${userInfo?.name}'s avatar`}
            className="w-24 h-24 rounded-full border border-gray-300"
          />
          <div className="text-center sm:text-left mt-4 sm:mt-0">
            <h1 className="text-2xl font-bold text-gray-900">
              {userInfo?.name}
            </h1>
            <p className="text-lg font-bold text-gray-900">{userInfo?.email}</p>
            <p className="text-gray-600">
              Role: <span className="font-bold "> Admin (placeholder)</span>
            </p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-700">
              Total Added Products:{" "}
              <span className="text-lg font-bold text-gray-900">6</span>
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-700">
              Other Information:
            </p>
            <p className="text-lg font-bold text-gray-900">Nothing to Show!</p>
          </div>
          <button
            onClick={logOut}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
