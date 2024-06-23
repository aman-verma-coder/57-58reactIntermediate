import frameImg from '../assets/frame.png';
import signup from '../assets/signup.png';
import SignupForm from './SignupForm.jsx';
import LoginForm from './LoginForm.jsx';
function Template({title, desc1, desc2, image, formType, setIsLoggedIn}) {
    // console.log("Type of setisloggedin",typeof setIsLoggedIn);
    return(
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>
                {formType === 'signup'?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)
                }
                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <button>
                    <p>Signup with Google</p>
                </button>
            </div>
            <div>
                <img src={frameImg} alt="Pattern" width={558} height={504} loading='lazy' />
                <img src={signup} alt="Student" width={558} height={490} loading='lazy' />
            </div>
            </div>
    )
}
export default Template;