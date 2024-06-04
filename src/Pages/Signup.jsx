import { useState } from "react";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp =()=>{
    const [data,setdata] = useState({name:"",email:"",password : "",cpassword:""});

    const changeHandler = (event)=>{
        const {name,value} = event.target;
        setdata((prev)=>(
            {...prev,[name] : value}
        ))
    }

    const submitHandler = async(event)=>{
        event.preventDefault();
        await axios.post('https://foody-swart.vercel.app/api/v1/login',{data})
        .then(
            window.location.replace('/login'),
            toast.success('Account Created')
        )
        .catch(
        toast.error("Incorrect data")
        )
    }
    return (
        <div>
            <div className="flex justify-between">
            <div className="flex justify-center items-center h-[100vh] lg:w-[40vw] sm:w-[45vw] flex-col xs:w-[100vw]">
                <div className="flex lg:w-[28vw] h-[100vh] justify-center flex-col sm:w-[40vw] xs-[100vw]">
                <div className="sm:mt-4 xs:mt-8"><img src="https://res.cloudinary.com/dmnjig3al/image/upload/v1716919022/Devcomm/xor9camsjzg2zvoza9cv.png" alt="Error" className="self-start"></img></div>
                <div className="self-start font-bold lg:text-5xl sm:4xl xs:text-3xl lg:mt-6 xs:mt-4  pl-2">Welcome</div>
                <div className="self-start mt-2 text-slate-500 md:text-lg pl-2 xs:text-base">Sign Up with your email address</div>
                    <form className="flex flex-col gap-4 justify-center pl-2 lg:mt-6 sm:mt-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="self-start text-lg">Name : </label>
                            <input type="text" id="name" name="name" value={data.name} placeholder="Enter Your Name" onChange={changeHandler} className="border-2 md:w-4/6 sm:w-60 h-10 bg-slate-100 pl-4 rounded-lg xs:w-72"></input>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="self-start text-lg">Email Address : </label>
                            <input type="email" id="email" name="email" value={data.email} placeholder="Enter Your Email" onChange={changeHandler} className="border-2 md:w-4/6 sm:w-60 h-10 bg-slate-100 pl-4 rounded-lg xs:w-72"></input>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="self-start text-lg">Password : </label>
                            <input type="password" id="password" name="password" value={data.password} placeholder="Enter Your Password" onChange={changeHandler} className="border-2 md:w-4/6 sm:w-60 h-10 bg-slate-100 pl-4 rounded-lg xs:w-72"></input>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="cpassword" className="self-start text-lg">Confirm Password : </label>
                            <input type="password" id="cpassword" name="cpassword" value={data.cpassword} placeholder="Confirm Your Password" onChange={changeHandler} className="border-2 md:w-4/6 sm:w-60 h-10 bg-slate-100 pl-4 rounded-lg xs:w-72"></input>
                        </div>
                        <div className="flex">
                            <input className=" self-start md:w-2/6 sm:w-40 xs:w-44 border-2 h-10 bg-[#3FA142] opacity-95 text-lg hover:cursor-pointer rounded-md" type="submit" onClick={submitHandler} ></input>
                        </div>
                    </form>
                    <div className="self-start pl-2 text-lg lg:mt-10 xs:mt-6">Already have an account ? <NavLink to='/logIn' className="text-[#3D8C26] text-lg font-semibold opacity-95">Log In</NavLink></div>
                </div>
            </div>
            <div className="h-dvh md:w-[60vw] sm:w-[50vw] xs:hidden sm:block"><img src="https://res.cloudinary.com/dmnjig3al/image/upload/v1716919053/Devcomm/ahaly0eq7vg5hjflrxlz.jpg" alt="Error" className="w-[100%] h-dvh object-cover"></img></div>
            </div>
        </div>
    )
}

export default SignUp;
