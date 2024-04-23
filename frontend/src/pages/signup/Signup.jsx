import { Link } from "react-router-dom";
import { useState } from "react";

import GenderCheckbox from "./GenderCheckbox";
import useSignup from "../../hooks/useSignup";


const Signup = () => {

  const [inputs, setInputs] = useState({
    fullName:  "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading, signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-blue-700 bg-clip- bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-white mb-3">
          Sign Up at
          <span className="text-blue-500"> TaskPad</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input type='text' placeholder="Enter Full Name" className="w-full input input-bordered h-10" 
            value={inputs.fullName}
            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"
            value={inputs.username}
            onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
             value={inputs.pssword}
             onChange={(e)=>setInputs({...inputs, password: e.target.value})}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">Confirm Password</span>
            </label>
            <input type="password" placeholder="Re-enter Password" className="w-full input input-bordered h-10" 
            value={inputs.confirm_password}
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to="/login" className="text-sm hover:underline text-white hover:text-blue-600 mt-2 inline-block">
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 bg-blue-500 hover:bg-slate-100 border-none text-white hover:text-black" disabled={loading}>
              { loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;