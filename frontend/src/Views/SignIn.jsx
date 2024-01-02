// Sign Up Component For users
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignIn = () => {
  //
  // State to hold Form Data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // Form Processing State
  const [formProcess, setFormProcess] = useState({
    loading: false,
    success: true,
    error: false,
  });

  // Server Error Response
  const [serverError, setServerError] = useState("");

  // Navigation instance
  const navigate = useNavigate();

  // Handler Functions
  const handleSignIn = async (e) => {
    // Prevent default form reloading page
    e.preventDefault();
    //
    setFormProcess({ ...formProcess, loading: true });
    try {
      // Make Api call to back end and await response
      const response = await fetch("https://reqres.in/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      //   Decode Response and see
      const data = await response.json();

      // Set the received user data to the Client
      // i.e the Name and other things necessary
      // excluding the password
      data;

      // Clean up Form Data
      setFormProcess({ loading: false, success: true, error: false });
      setFormData({});

      // Redirect to the Sign In Page
      navigate("/");

      // Catch Possible Errors
    } catch (error) {
      setFormProcess({ loading: false, success: false, error: false });
      // Handle Necessary Error
      setServerError(error.message);
    }
  };

  // onChange Form Handler
  const handleFormChange = (e) => {
    setFormProcess({ loading: false, success: true, error: false });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Return to DOM
  return (
    <motion.div
      className="w-full max-w-screen-xl p-4 md:p-16 mx-auto"
      initial={{ x: "-90%" }}
      animate={{ x: 0 }}
      exit={{ x: "-130%" }}
    >
      <form
        onSubmit={handleSignIn}
        autoComplete="off"
        className="w-full max-w-sm p-4 flex flex-col text-center gap-3 mx-auto shadow-2xl shadow-slate-200  rounded-2xl"
      >
        <h1 className="md:text-2xl font-extrabold text-slate-900">
          Login to your Account
        </h1>

        {/* Error From Server */}
        {!formProcess.success && (
          <p className="text-sm text-red-600">`${serverError}`</p>
        )}

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleFormChange}
          className="p-3 text-sm rounded-lg w-full outline-1 outline-slate-300 outline valid:outline-2 valid:outline-[#00B207] transition ease-in"
        />

        {/* Password Input  */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength={8}
          maxLength={25}
          onChange={handleFormChange}
          className={`p-3 text-sm rounded-lg w-full ${
            formProcess.error
              ? "outline-2 outline-red-600"
              : "outline-1 outline-slate-300 valid:outline-2 valid:outline-[#00B207]"
          } outline transition ease-in`}
        />

        {/* Terms Check Box */}
        <label htmlFor="terms" className="text-xs w-[80%] mx-auto">
          <input type="checkbox" name="acceptTerms" id="terms" required /> By
          signing up you accept the Terms and Conditions of this platform.
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className={`p-3 text-sm rounded-lg w-full h-[60px] outline-1 outline-slate-300 outline ${
            formProcess.loading ? "bg-white" : "bg-[#00B207] text-white}"
          }`}
          disabled={formProcess.loading}
        >
          {formProcess.loading ? (
            <div className="flex flex-row gap-3 h-full justify-center items-center font-extrabold">
              <img src="walk-loading.gif" alt="..." className="h-full" />{" "}
              <span>Signing You In</span>
            </div>
          ) : (
            <p>Sign In</p>
          )}
        </button>

        {/* Redirect to Login */}
        <Link to="/signup">
          <p className="text-sm">
            New User?{" "}
            <span className="font-extrabold text-[#00B207]">
              Create An Account
            </span>
          </p>
        </Link>
      </form>
    </motion.div>
  );
};

export default SignIn;
