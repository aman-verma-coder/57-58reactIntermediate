import frameImg from '../assets/frame.png';
import signup from '../assets/signup.png';
import SignupForm from './SignupForm.jsx';
import LoginForm from './LoginForm.jsx';
import { FcGoogle } from 'react-icons/fc';
function Template({title, desc1, desc2, image, formType, setIsLoggedIn}) {
    // console.log("Type of setisloggedin",typeof setIsLoggedIn);
    return(
        <div className='flex w-11/12 justify-between max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-8'>
            <div className='w-11/12 max-w-[450px]'>
                <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>
                    {title}
                </h1>
                <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                    <span className='text-white'>{desc1}</span><br />
                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>
                {formType === 'signup'?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)
                }
                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='h-[1px] w-full bg-gray-800'></div>
                    <p className='text-black font-medium leading-[1.375rem]'>
                        OR
                    </p>
                    <div className='h-[1px] w-full bg-gray-800'></div>
                </div>
                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-gray-100 border border-gray-800 px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle></FcGoogle>
                    <p>Signin with Google</p>
                </button>
            </div>
            <div className='relative w-11/12 max-w-[450px]'>
                <img
                src={frameImg}
                alt="Pattern"
                width={558}
                height={504}
                loading='lazy'
                className='' />
                <img
                src={signup}
                alt="Student"
                width={558}
                height={490}
                loading='lazy'
                className='absolute -top-4 right-4' />
            </div>
            </div>
    )
}
export default Template;