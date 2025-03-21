import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Link to="signin">Already have an account? Sign In</Link>
    </div>
  );
};

export default Signup;
