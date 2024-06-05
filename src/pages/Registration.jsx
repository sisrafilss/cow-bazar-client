import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
// import GitHubLogin from "../components/GitHubLogin";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const RegistrationPage = () => {
  const { createUser, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [registrationError, setRegistrationError] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    // Simulate registration and error handling
    if (data.password !== data.confirmPassword) {
      setRegistrationError("Passwords do not match. Please try again.");
    } else {
      setRegistrationError("");
      console.log("Registration successful");
      // Redirect or perform post-registration actions here
      createUser(data?.email, data?.password).then((response) => {
        if (response?.user.email) {
          const userData = {
            email: response?.user?.email,
            name: data?.name,
          };
          axios
            .post("https://cow-bazar-server-psi.vercel.app/user", userData)
            .then((response) => {
              console.log(response.data.token);
              localStorage.setItem("token", response?.data?.token);
            });
        }
      });
    }
  };

  const password = watch("password", "");

  // Redirect user where he came from or to homepage
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      console.log(from);
    }
  }, [from, navigate, user]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse  w-full mx-auto">
        <div className="text-center lg:text-left  px-4">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Join us today and get full access to exclusive content and
            personalized features.
          </p>
        </div>
        <div className="card w-full max-w-md shadow-2xl bg-base-100 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {registrationError && (
              <div className="alert alert-error shadow-lg">
                <div>
                  <span>{registrationError}</span>
                </div>
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
              {watch("confirmPassword") &&
                watch("confirmPassword") !== password && (
                  <p className="text-red-500 text-sm mt-1">
                    Passwords do not match.
                  </p>
                )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <GoogleLogin />
            {/* <GitHubLogin /> */}
          </form>
          <div className="text-center mt-0 pb-8">
            <p>
              Already registered?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
