'use client';

import CustomButton from "../forms/CustomButton";
import useLoginModel from "../hooks/useLoginModel";
import Model from "./Model";

const LoginModel= ()=>{
    const loginModel = useLoginModel()
    const content = (
        <>
            <form action="" className="space-y-3">
                <input placeholder='Your email address' type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl "/>
                
                <input placeholder='Your password' type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl "/>
                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>
                <CustomButton
                label="Submit"
                onClick={()=> console.log('Login')}
                />

            </form>
        </>
    )
    return(
        <Model
        isOpen={loginModel.isOpen}
        close ={loginModel.close}
        label="Log in"
        content={content}
        />
    )
}
export default LoginModel
