import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import OAuth from "../components/OAuth";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!result?.success) {
        setError(result?.message);
        setLoading(false);
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in')
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  
  return (
    <div className="p-3 max-w-lg items-center mx-auto mt-10">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="border bg-white border-gray-300 rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="border border-gray-300 bg-white rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="border border-gray-300  bg-white rounded-lg p-3"
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={loading}
          className="uppercase cursor-pointer bg-slate-700 rounded-lg hover:opacity-95 text-white p-3 disabled:opacity-80"
        >
          {loading ? "loading..." : "Sign up"}
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an Account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default Signup;
