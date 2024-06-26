import { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
function LoginForm({ setIsLoggedIn }) {
    const navigate=useNavigate();
    const [formData,setFormData]= useState({
        email:'',password:''
    })
    const [showPassword,setShowPassword]=useState(false);
    function changeHandler(event) {
        setFormData((prev)=>({
            // {
                ...prev,
                [event.target.name]:event.target.value,
            // }
        }))
    }
    function submitHandler(event) {
        console.log("submitHandlerstarted");
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In Successfully");
        navigate('/dashboard');
        console.log("submitHandlerended");
    }
    return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        <label className="w-full">
            <p className="text-0.[875rem] text-gray-50 mb-1 leading-[1.375rem]">
                Email <sup className="text-pink-200">*</sup>
            </p>
            <input
            type="email"
            required value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email Address"
            name="email"
            className="bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border border-b-1 border-l-0 border-r-0 border-t-0 border-gray-400" />
        </label>
        <label className="w-full relative">
            <p className="text-0.[875rem] text-gray-50 mb-1 leading-[1.375rem]">
                Password <sup className="text-pink-200">*</sup>
            </p>
            <input 
            type={showPassword?('text'):('password')} 
            required value={formData.password} 
            onChange={changeHandler} 
            placeholder="Enter Password" 
            name="password"
            className="bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border border-b-1 border-l-0 border-r-0 border-t-0 border-gray-400" />
            <span className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
            <Link to="#">
            <span className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
            Forgot Password
            </span>
            </Link>
        </label><br />
        <button type="submit" className="bg-yellow-400 rounded-[8px] font-medium text-gray-900 px-[12px] py-[8px] mt-[-20px]">
            Log In
            </button>
    </form>
    );
}
export default LoginForm;