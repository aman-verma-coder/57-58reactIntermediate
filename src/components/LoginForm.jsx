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
    <form onSubmit={submitHandler}>
        <label >
            <p>
                Email <sup>*</sup>
            </p>
            <input type="email" required value={formData.email} onChange={changeHandler} placeholder="Enter Email Id" name="email" />
        </label>
        <label >
            <p>
                Password <sup>*</sup>
            </p>
            <input type={showPassword?('text'):('password')} required value={formData.password} onChange={changeHandler} placeholder="Enter Password" name="password" />
            <span onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            <Link to="#">
            Forgot Password</Link>
        </label><br />
        <button type="submit">Log In</button>
    </form>
    );
}
export default LoginForm;