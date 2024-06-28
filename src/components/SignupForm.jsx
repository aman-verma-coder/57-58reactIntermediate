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
    const [accType,setAccType]=useState("student");
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
        <div className="flex bg-gray-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
            <button className={`${accType==='student'}`}
            ?
            
            onClick={()=>{setAccType("student")}}>
                Student
            </button>
            <button onClick={()=>{setAccType("instructor")}}>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            {/* First Name and Last Name */}
            <div className="flex gap-x-4 justify-between mt-4">
                <label className="w-full">
                    <p className="text-0.[875rem] text-gray-50 mb-1 leading-[1.375rem]">
                        First Name
                        <sup className="text-pink-200">*</sup></p>
                    <input 
                    type="text" 
                    required name="firstName" 
                    onChange={changeHandler} 
                    placeholder="Enter Firs tName" 
                    value={formData.firstName}
                    className="h-[2.85rem] bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border border-b-1 border-l-0 border-r-0 border-t-0 border-gray-400" />
                </label>
                <label className="w-full">
                    <p className="text-0.[875rem] text-gray-50 mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
                    <input 
                    type="text" required name="lastName" 
                    onChange={changeHandler} 
                    placeholder="Enter Last Name" 
                    value={formData.lastName}
                    className="h-[2.85rem] bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border border-b-1 border-l-0 border-r-0 border-t-0 border-gray-400" />
                </label>
            </div>
            {/* Email */}
            <label className="w-full">
                <p className="text-0.[875rem] text-gray-50 mb-1 leading-[1.375rem] mt-4">Email <sup className="text-pink-200">*</sup></p>
                <input 
                type="email" 
                required name="email" 
                onChange={changeHandler} 
                placeholder="Enter Email ID" 
                value={formData.email}
                className="h-[2.85rem] bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border border-b-1 border-l-0 border-r-0 border-t-0 border-gray-400" />
            </label>
                {/* Create Password and Confirm Password */}
                <div className="flex gap-x-4 justify-between">
                    <label className="w-full relative">
                        <p className="text-0.[875rem] text-gray-50 mb-1 leading-[1.375rem] mt-4">Create Password<sup className="text-pink-200">*</sup></p>
                        <input 
                        type={showPassword1?("text"):("password")} 
                        required name="password" 
                        onChange={changeHandler} 
                        placeholder="Enter Password" 
                        value={formData.password}
                        className="h-[2.85rem] bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border border-b-1 border-l-0 border-r-0 border-t-0 border-gray-400" />
                        <span className="absolute right-3 top-[52.5px] cursor-pointer"
                        onClick={() => setShowPassword1(prev => !prev)}>
                            {showPassword1 ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye fontSize={24} fill="#AFB2BF"/>}
                        </span>
                    </label>
                    <label className="w-full relative">
                        <p className="text-0.[875rem] text-gray-50 mb-1 leading-[1.375rem] mt-4">
                            Confirm Password
                            <sup className="text-pink-200">*</sup></p>
                        <input 
                        type={showPassword2?("text"):("password")} 
                        required name="confirmPassword" 
                        onChange={changeHandler} 
                        placeholder="Confirm Password" 
                        value={formData.confirmPassword} 
                        className="h-[2.85rem] bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border border-b-1 border-l-0 border-r-0 border-t-0 border-gray-400" />
                        <span className="absolute right-3 top-[52.5px] cursor-pointer"
                        onClick={() => setShowPassword2(prev => !prev)}>
                            {showPassword2 ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye fontSize={24} fill="#AFB2BF"/>}
                        </span>
                    </label>
                </div>
                <button className="w-full bg-yellow-400 rounded-[8px] font-medium text-gray-900 px-[15px] py-[10px] mt-[25px]">Create Account</button>
        </form>
    </div>);
}
export default SignupForm;