import React from "react";
import SignupForm from"../components/SignupForm";
function Signup({setIsLogin}){
    return (
        <SignupForm setIsLogin={setIsLogin}/>
    )
}
export default Signup;