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
                <label>
                    <p>First Name <sup>*</sup></p>
                    <input type="text" required name="firstName" onChange={changeHandler} placeholder="Enter Firs tName" value={formData.firstName} />
                </label>
                <label>
                    <p>Last Name <sup>*</sup></p>
                    <input type="text" required name="lastName" onChange={changeHandler} placeholder="Enter Last Name" value={formData.lastName} />
                </label>
            </div>
            {/* Email */}
            <label>
                <p>Email <sup>*</sup></p>
                <input type="email" required name="email" onChange={changeHandler} placeholder="Enter Email ID" value={formData.email} />
            </label>
                {/* Create Password and Confirm Password */}
                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input type={showPassword1?("text"):("password")} required name="password" onChange={changeHandler} placeholder="Enter Password" value={formData.password} />
                        <span onClick={() => setShowPassword1(prev => !prev)}>
                            {showPassword1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>
                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input type={showPassword2?("text"):("password")} required name="confirmPassword" onChange={changeHandler} placeholder="Confirm Password" value={formData.confirmPassword} />
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