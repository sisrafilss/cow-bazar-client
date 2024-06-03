import { FaGithub } from "react-icons/fa";


const GitHubLogin = () => {
    const handleGithubSignIn = () => {
        console.log("GitHub Sign-In");
        // Implement GitHub Sign-In logic here
      };
    

    return (
        <div className="form-control mt-2">
        <button
          type="button"
          onClick={handleGithubSignIn}
          className="btn btn-outline btn-neutral flex items-center"
        >
          <FaGithub className="mr-2" /> Sign in with GitHub
        </button>
      </div>
    );
};

export default GitHubLogin;