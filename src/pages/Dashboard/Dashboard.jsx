import axios from "axios";
import useAuth from "../../hooks/useAuth";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { user } = useAuth();

  const token = localStorage.getItem("token");
  // const userInfo = {
  //   name: 'John Doe',
  //   email: 'johndoe@example.com',
  //   profilePicture: 'https://example.com/profile.jpg',
  //   contactNumber: '+1234567890',
  //   address: '123 Main St, City, Country',
  //   age: 30,
  // };

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
    <div className="flex justify-between bg-white shadow-md rounded-lg p-6 w-full md:w-2/3 lg:w-1/2 mx-auto mt-8">
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
      <Link to={`profile/edit/${userInfo?._id}`} className="btn btn-primary">Edit Profile</Link>
    </div>
  );
};

export default Dashboard;
