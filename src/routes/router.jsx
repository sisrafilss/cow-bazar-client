import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

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
    ],
  },
  // {
  //   path: "dashboard",
  //   element: <DashboardLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "",
  //       element: (
  //         <PrivateRoute>
  //           <Dashboard />
  //         </PrivateRoute>
  //       ),
  //     },
  //   ],
  // },
]);
