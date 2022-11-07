import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/images/icons/icons8-google-48.png";
import FacebookIcon from "../../assets/images/icons/icons8-facebook-48.png";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleGoogleLogIn = () => {};
  const handleFacebookLogIn = () => {};

  return (
    <div>
      <div className="min-h-screen mt-8">
        <div className="border border-gray-500 w-11/12 lg:w-4/12 mx-auto rounded-xl pt-10 pb-20">
          <h2 className="text-3xl font-semibold mb-5 pb-16">Login</h2>
          {/* <p className="text-red-500 mb-5">{error.slice(10, 300)}</p> */}
          <form onSubmit={handleSubmit} className="w-9/12 mx-auto">
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-3 pl-2 focus:outline-none text-xl"
                type="email"
                name="email"
                // onBlur={emailOnBlue}
                placeholder="Username or Email"
                required
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-3 pl-2 focus:outline-none text-xl mt-10"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between  mt-10">
              <div>
                <input type="checkbox" name="" id="rememberMe" />
                <label htmlFor="rememberMe" className="ml-2">
                  Remember Me
                </label>
              </div>
              <div>
                <button className="underline">Forgot Password</button>
              </div>
            </div>
            <button className="btn btn-primary w-full mt-10 ">Login</button>
            <h4 className="my-10">
              Don't have an account?{" "}
              <Link to="/register" className="underline">
                Create a new account
              </Link>
            </h4>
            <div className="divider  mt-5">OR SIGN IN WITH</div>
            <div className="flex justify-center mt-5">
              <div
                onClick={handleGoogleLogIn}
                className="border w-24 h-24 flex justify-center items-center flex-col mr-2 px-4 py-2 rounded-full cursor-pointer"
              >
                <img className="w-10 mx-auto" src={GoogleIcon} alt="" />
                <p className="">Google</p>
              </div>
              <div
                onClick={handleFacebookLogIn}
                className="border w-24 h-24 flex justify-center items-center flex-col mr-2 px-4 py-2 rounded-full cursor-pointer"
              >
                <img className="w-10 mx-auto" src={FacebookIcon} alt="" />
                <p className="">Facebook</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
