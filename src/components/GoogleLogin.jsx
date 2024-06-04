import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In");
    // Implement Google Sign-In logic here
    googleLogin()
      .then((res) => {
        const user = res.user;
        console.log("Signed in using google. Result: ", user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        console.log("Error Code:", errorCode);
        console.log("Error message: ", errorMessage);
        console.log("Email:", email);
        console.log(error);
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
