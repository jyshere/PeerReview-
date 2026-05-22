import React from "react";
import LoginForm from"../components/LoginForm";
function Login({setIsLogin}){
    return (
        <LoginForm setIsLogin={setIsLogin}/>
    )
}
export default Login;