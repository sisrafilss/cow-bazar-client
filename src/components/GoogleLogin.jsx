import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In");
    // Implement Google Sign-In logic here
    googleLogin().then((data) => {
      if (data?.user.email) {
        const userData = {
          email: data?.user?.email,
          name: data?.user?.displayName,
          photoURL: data?.user?.photoURL,
        };
        axios.post("http://localhost:5000/user", userData).then((response) => {
          console.log(response.data.token);
          localStorage.setItem("token", response?.data?.token);
        });
      }
    });
  };

  return (
    <div className="form-control mt-4">
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="btn btn-outline btn-accent flex items-center"
      >
        <FcGoogle className="mr-2" /> Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
