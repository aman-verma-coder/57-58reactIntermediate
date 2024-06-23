import Template from '../components/Template.jsx';
import loginImage from '../assets/login.png';
function Login({setIsLoggedIn}) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImage}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
    // <p>jdisfcdskjchksdk</p>
  );
}
export default Login;
