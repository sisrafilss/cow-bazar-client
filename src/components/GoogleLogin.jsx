import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In");
    // Implement Google Sign-In logic here
    googleLogin();
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
