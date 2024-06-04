import { useState } from "react";
import { NavLink} from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Login =()=>{
    const [data,setdata] = useState({name:"",email:"",password : ""});

    const changeHandler = (event)=>{
        const {name,value} = event.target;
        setdata((prev)=>(
            {...prev,[name] : value}
        ))
    }

    const submitHandler = async(event)=>{
        event.preventDefault();
        const {name,email,password} = data;
        await axios.post('/api/v1/login',{
            name : name,
            email : email,
            password : password
        },
        {
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then((response)=>{
            if(response.success){toast.success("Successfully logged in"),
            window.location.replace('/')}
            else{
                toast.error("Incorrect details")
            }
        }
        )
        .catch((err)=>console.error(err));
    }
    return (
        <div>
            <div className="flex justify-between">
            <div className="flex justify-center items-center h-[100vh] lg:w-[40vw] sm:w-[45vw] flex-col xs:w-[100vw]">
                <div className="flex lg:w-[28vw] h-[100vh] justify-center flex-col sm:w-[40vw] xs-[100vw] xs:gap-y-1">
                <div className="sm:mt-4 xs:mt-8"><img src="https://res.cloudinary.com/dmnjig3al/image/upload/v1716919022/Devcomm/xor9camsjzg2zvoza9cv.png" alt="Error" className="self-start sm:w-auto sm:mt-2 xs:w-[80vw] xs:mt-6"></img></div>
                <div className="self-start font-bold lg:text-5xl xs:text-3xl lg:mt-8 xs:mt-4 pl-2">Welcome Back</div>
                <div className="self-start mt-2 text-slate-500 md:text-lg pl-2 xs:text-base">Sign in with your email address and Password</div>
                    <form className="flex flex-col gap-4 justify-center pl-2 lg:mt-6 md:mt-4">
                        <div className="flex flex-col ">
                            <label htmlFor="name" className="self-start text-lg">Name : </label>
                            <input type="text" id="name" name="name" value={data.name} placeholder="Enter Your Name" onChange={changeHandler} className="border-2 md:w-4/6 sm:w-60 h-12 bg-slate-100 pl-4 rounded-lg xs:w-72"></input>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="self-start text-lg">Email Address : </label>
                            <input type="email" id="email" name="email" value={data.email} placeholder="Enter Your Email" onChange={changeHandler} className="border-2 md:w-4/6 sm:w-60 h-12 bg-slate-100 pl-4 rounded-lg xs:w-72"></input>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="self-start text-lg">Password : </label>
                            <input type="password" id="password" name="password" value={data.password} placeholder="Enter Your Password" onChange={changeHandler} className="border-2 md:w-4/6 sm:w-60 h-12 bg-slate-100 pl-4 rounded-lg xs:w-72"></input>
                        </div>
                        <div className="flex">
                            <input className=" self-start md:w-2/6 sm:w-40 xs:w-44 border-2 h-12 bg-[#3FA142] opacity-95 text-lg hover:cursor-pointer rounded-md" type="submit" onClick={submitHandler} ></input>
                        </div>
                    </form>
                    <div className="self-start pl-2 text-lg lg:mt-10 xs:mt-6">Don't have an account ? <NavLink to='/signup' className="text-[#3D8C26] text-lg font-semibold opacity-95">Sign Up</NavLink></div>
                </div>
            </div>
            <div className="h-dvh md:w-[60vw] sm:w-[50vw] xs:hidden sm:block"><img src="https://res.cloudinary.com/dmnjig3al/image/upload/v1716919053/Devcomm/ahaly0eq7vg5hjflrxlz.jpg" alt="Error" className="w-[100%] h-[100%] object-cover"></img></div>
            </div>
        </div>
    )
}

export default Login;
