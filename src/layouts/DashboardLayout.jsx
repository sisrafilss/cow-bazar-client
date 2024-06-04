import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaTachometerAlt, FaBoxOpen, FaPlusCircle, FaHome, FaBars } from 'react-icons/fa';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full bg-gray-800 text-white p-6 w-64 hidden lg:block">
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
            <FaTachometerAlt />
            <Link to="/dashboard" className="text-white">Dashboard</Link>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
            <FaBoxOpen />
            <Link to="all-cows" className="text-white">All Cows</Link>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
            <FaPlusCircle />
            <Link to="add-cow" className="text-white">Add Cow</Link>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
            <FaHome />
            <Link to="/" className="text-white">Home</Link>
          </li>
        </ul>
      </div>

      <div className={`z-50 fixed top-0 left-0 h-full bg-gray-800 text-white p-6 w-64 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4">
          <li onClick={toggleSidebar} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
            <FaTachometerAlt />
            <Link to="/dashboard" className="text-white">Dashboard</Link>
          </li>
          <li onClick={toggleSidebar} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
            <FaBoxOpen />
            <Link to="all-cows" className="text-white">All Cows</Link>
          </li>
          <li onClick={toggleSidebar} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
            <FaPlusCircle />
            <Link to="add-cow" className="text-white">Add Cow</Link>
          </li>
          <li onClick={toggleSidebar} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
            <FaHome />
            <Link to="/" className="text-white">Home</Link>
          </li>
        </ul>
      </div>

      <div className="lg:hidden flex items-start p-4">
        <button onClick={toggleSidebar} className="text-gray-800 focus:outline-none">
          <FaBars className="text-2xl" />
        </button>
      </div>

      <div className="ml-0 lg:ml-64 p-8 w-full bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
