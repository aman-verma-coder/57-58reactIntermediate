import React from "react";
import { Navigate } from "react-router-dom";
function PrivateRoute ({isLoggedIn,children}) {
    // const Navigate=useNavigate();
    if (isLoggedIn) {
        return children
    }else{
        return <Navigate to='/login'></Navigate>
    }
}
export default PrivateRoute;