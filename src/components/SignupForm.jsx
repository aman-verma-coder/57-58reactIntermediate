import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
function SignupForm({setIsLoggedIn}) {
    const navigate=useNavigate();
    const  [formData, setFormData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
    })
    const [showPassword1,setShowPassword1]=useState(false);
    const [showPassword2,setShowPassword2]=useState(false);
    function changeHandler(event) {
        setFormData((prev)=>({
            // {
                ...prev,
                [event.target.name]:event.target.value,
            // }
        }))
    }
    function submitHandler(event) {
        event.preventDefault();
        if (formData.password ===formData.confirmPassword) {
            setIsLoggedIn(true);
            toast.success("Account Created");
            const accData={
                ...formData,
            };
            console.log(accData);
            navigate('/dashboard');
        }
        else{
            toast.error("Passwords do not match");
        }
    }
    return (<div>
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            {/* First Name and Last Name */}
            <div>
                <label className="w-full">
                    <p className="text-0.[875rem] text-gray-50 mb-1 leading-[1.375rem]">
                        First Name
                        <sup>*</sup></p>
                    <input 
                    type="text" 
                    required name="firstName" 
                    onChange={changeHandler} 
                    placeholder="Enter Firs tName" 
                    value={formData.firstName}
                    className="bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border border-b-1 border-l-0 border-r-0 border-t-0 border-gray-400" />
                </label>
                <label className="w-full">
                    <p className="text-0.[875rem] text-gray-50 mb-1 leading-[1.375rem]">Last Name <sup>*</sup></p>
                    <input 
                    type="text" required name="lastName" 
                    onChange={changeHandler} 
                    placeholder="Enter Last Name" 
                    value={formData.lastName}
                    className="bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border border-b-1 border-l-0 border-r-0 border-t-0 border-gray-400" />
                </label>
            </div>
            {/* Email */}
            <label className="w-full">
                <p className="text-0.[875rem] text-gray-50 mb-1 leading-[1.375rem]">Email <sup>*</sup></p>
                <input 
                type="email" 
                required name="email" 
                onChange={changeHandler} 
                placeholder="Enter Email ID" 
                value={formData.email}
                className="bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border border-b-1 border-l-0 border-r-0 border-t-0 border-gray-400" / >
            </label>
                {/* Create Password and Confirm Password */}
                <div>
                    <label className="w-full">
                        <p className="text-0.[875rem] text-gray-50 mb-1 leading-[1.375rem]">Create Password<sup>*</sup></p>
                        <input 
                        type={showPassword1?("text"):("password")} 
                        required name="password" 
                        onChange={changeHandler} 
                        placeholder="Enter Password" 
                        value={formData.password}
                        className="bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border border-b-1 border-l-0 border-r-0 border-t-0 border-gray-400" />
                        <span onClick={() => setShowPassword1(prev => !prev)}>
                            {showPassword1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>
                    <label className="w-full">
                        <p className="text-0.[875rem] text-gray-50 mb-1 leading-[1.375rem]">
                            Confirm Password
                            <sup>*</sup></p>
                        <input 
                        type={showPassword2?("text"):("password")} 
                        required name="confirmPassword" 
                        onChange={changeHandler} 
                        placeholder="Confirm Password" 
                        value={formData.confirmPassword} 
                        className="bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border border-b-1 border-l-0 border-r-0 border-t-0 border-gray-400" />
                        <span onClick={() => setShowPassword2(prev => !prev)}>
                            {showPassword2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>
                </div>
                <button>Create Account</button>
        </form>
    </div>);
}
export default SignupForm;