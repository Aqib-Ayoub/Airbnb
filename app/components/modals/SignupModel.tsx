'use client';

import CustomButton from "../forms/CustomButton";
import useSignupModel from "../hooks/useSignupModel";
import Model from "./Model";

const SignupModel= ()=>{
    const signupModel = useSignupModel()
    const content = (
        <>
            <form action="" className="space-y-3">
                <input placeholder='Your email address' type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl "/>
                <input placeholder='Your password' type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl "/>
                <input placeholder='Confirm your password' type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl "/>
                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>
                <CustomButton
                label="Submit"
                onClick={()=> console.log('Sign up')}
                />

            </form>
        </>
    )
    return(
        <Model
        isOpen={signupModel.isOpen}
        close ={signupModel.close}
        label="Sign up"
        content={content}
        />
    )
}
export default SignupModel