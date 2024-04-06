import React, { useState } from "react";
import { Link } from "react-router-dom";
import { paddingForPage } from "../../defineSize";

export default function LoginPage() {

    const [formdata,setFormdata]=useState({})
    
    const handelChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormdata({...formdata,[e.target.id]:e.target.value})
    }

    const handelSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(formdata)
    }

  return (
    <>
    <div className=" bg-primaryBlue w-full h-screen relative">
        <div className="">
            <img className="rotate-180 " src="./assets/weavyArch.svg" alt="wave" />
        </div>
        <div className={`w-full h-full absolute top-0  sm:px-32 xmd:px-44 pt-10 sm:pb-20 ${paddingForPage}`}>
            <div className="backdrop-blur-xl bg-white/30 w-full h-full rounded-lg shadow-xl">
                <div className=" py-8 px-8">
                    <img src="./icons/back.svg" alt="" />
                </div>
                <div className=" flex flex-col items-center justify-center gap-8">
                    <div className="">
                        <p className=" text-4xl text-primaryBlue font-bold">Login/ Sign up</p>
                    </div>
                    <div className=" flex flex-col gap-3">
                        <form className=" flex flex-col gap-5 items-center " onSubmit={handelSubmit}>
                            <input className="text-2xl py-2 px-8 sm:px-16 rounded-lg bg-white text-primaryBlue " type="email" required name="" id="email" placeholder="Email" onChange={handelChange} />
                            <input className="text-2xl py-2 px-8 sm:px-16  rounded-lg bg-white text-primaryBlue " type="password" required name="" id="password" placeholder="Password"  onChange={handelChange}/>
                            <button className="bg-white text-xl rounded-3xl py-2 px-12 mt-4  text-primaryBlue w-1/2 hover:text-white hover:bg-primaryBlue" type="submit">Login</button>
                        </form>
                        <div className=" flex flex-col  items-center ">
                            <button className="bg-primaryBlue text-xl rounded-3xl py-2 px-8 text-white w-1/2 hover:text-primaryBlue hover:bg-white">Sign up</button>
                        </div>
                        <div className=" flex flex-col items-center">
                            <Link className=" border-b-2 text-bodybg opacity-50 border-bodybg" to=''>Forgot Password?</Link>
                        </div>
                        <div className="flex flex-col items-center py-14">
                            <div className=" flex flex-row justify-center items-center bg-white rounded-md px-4 py-2 gap-2">
                                <img className=" w-8" src="./icons/google.svg" alt="" />
                                <p className=" text-xl font-semibold">Continue with Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
