/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/GoogleLogin";
// import GitHubLogin from "../components/GitHubLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const { user, signIn } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    // Simulate a login attempt and error handling
    if (data.password !== "correct_password") {
      setLoginError("Incorrect password. Please try again.");
    } else {
      setLoginError("");
      console.log("Login successful");
      // Redirect or perform post-login actions here
    }
    signIn(data?.email, data?.password);
  };

  // Redirect user where he came from or to homepage
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      console.log(from);
    }
  }, [from, navigate, user]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            To get the full benefits of our website, please log in. Enjoy
            exclusive content, personalized features, and much more.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {loginError && (
              <div className="alert alert-error shadow-lg">
                <div>
                  <span>{loginError}</span>
                </div>
              </div>
            )}
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
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>

            <GoogleLogin />
            {/* <GitHubLogin /> */}
            <div className="text-center mt-0 mt-4 ">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
