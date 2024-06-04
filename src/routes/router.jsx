import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import DashboardLayout from "../layouts/DashboardLayout";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import RegistrationPage from "../pages/Registration";
import LoginPage from "../pages/Login";
import PrivateRoute from "./private/PrivateRoute";
import EditProfile from "../pages/Dashboard/EditProfile";
import AddCow from "../pages/Dashboard/AddCow";
import AllCows from "../pages/Dashboard/AllCows";
import EditCow from "../pages/Dashboard/EditCow";
import SingleCow from "../pages/SingleCow";

const token = localStorage.getItem("token");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
      {
        path: "all-cows",
        element: (
          <div className="my-8">
            <AllCows />
          </div>
        ),
      },
      {
        path: "all-cows/:id",
        element: <SingleCow />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cows/${params.id}`, {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }),
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/cows`),
      },
      {
        path: "profile/edit/:_id",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/get/${params._id}`, {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }),
      },
      {
        path: "add-cow",
        element: (
          <PrivateRoute>
            <AddCow />
          </PrivateRoute>
        ),
      },
      {
        path: "all-cows",
        element: (
          <PrivateRoute>
            <AllCows />
          </PrivateRoute>
        ),
      },
      {
        path: "all-cows/:id",
        element: (
          <PrivateRoute>
            <SingleCow />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cows/${params.id}`, {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }),
      },
      {
        path: "all-cows/edit/:id",
        element: (
          <PrivateRoute>
            <EditCow />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cows/${params.id}`, {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }),
      },
    ],
  },
]);
