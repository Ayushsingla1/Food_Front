import { useState } from "react"
import Navbar from "../components/NavBar";
import { TiLocationOutline } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import toast from "react-hot-toast";
import FootBar from "../components/FootBar";

const Contact = ()=>{
    const [data,setdata] = useState({name : "" , email : "" , message : ""})

    const dataHandler = (event)=>{
        const {name,value} = event.target;
        setdata((prev)=>({...prev,[name] : value}))
    }

    const submitHandler = async(event)=>{
        event.preventDefault();
        const {name,email,message} = data;
        const res = await fetch('/api/v1/contact',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
               name,email,message
            })
        })
        if(res.status === 200){
            toast.success('Message Sent')
        }
        console.log(res);
    }

    return (
        <div className="overflow-x-hidden">
            <Navbar/>
            <div className="xs:bg-Siuu sm:bg-[#404040] w-[100vw] min-h-[100vh] flex justify-center items-center ">
            <div className="w-[50%] sm:bg-[#F1F1F1] sm:relative sm:shadow-2xl sm:shadow-current flex flex-col justify-evenly lg:w-[60%] md:w-[70%] sm:w-[90%] sm:h-[80%] xs:w-[90%] xs:bg-none xs:justify-center">
            <div className="sm:bg-[#E59696] sm:w-[40%] h-[80%] sm:absolute top-[10%] left-[-10%] sm:shadow-2xl sm:shadow-black flex flex-col xs:w-[100%] xs:bg-none">
                <div className="flex px-10 flex-col sm:gap-y-14 pt-12 xs:gap-y-6">
                <div className="text-4xl sm:self-start xs:self-center xs:font-bold">Contact Us</div>
                <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-4 text-xl sm:text-white sm:justify-normal xs:justify-center"><div><TiLocationOutline/></div>XYZ STREET,DELHI</div>
                    <div className="flex items-center gap-4 text-xl sm:text-white sm:justify-normal xs:justify-center"><div><IoCallOutline/></div><div>+91-9416850980</div></div>
                    <div className="flex items-center gap-4 text-xl sm:text-white break-words sm:justify-normal xs:justify-center"><div><TfiEmail/></div><div>ABC@gmail.com</div></div>
                </div>
                </div>
            </div>
                <div className="sm:ml-[30%] flex flex-col h-full justify-around">
                <div className="flex flex-col pt-5 mb-6 gap-y-2">
                <div className="font-bold text-5xl text-center">Get in Touch</div>
                <div className="font-semibold text-center">Feel free to drop us a line below!</div>
                </div>
                <div>
                <form className="flex flex-col justify-center gap-12 sm:mr-20 items-end xs:items-center">
                    <input type="text" placeholder="Enter Your name" name = "name" value ={data.name} onChange={dataHandler} className="h-16 w-[60%] bg-[#D9D9D9] rounded-lg text-xl pl-4"></input>
                    <input type="email" placeholder="Enter Your Email" name = "email" value ={data.email} onChange={dataHandler} className="h-16 w-[60%] bg-[#D9D9D9] rounded-lg text-xl pl-4"></input>
                    <input type="text" placeholder="Enter Your message" name = "message" value ={data.message} onChange={dataHandler} className="h-24 w-[60%] bg-[#D9D9D9] rounded-xl text-xl pl-4"></input>
                    <div className="self-center pb-4">
                        <input type="submit" onClick={submitHandler} className="bg-[#E59696] p-2 rounded-lg w-32 text-lg hover:cursor-pointer" value="SEND"></input>
                    </div>
                </form>
                </div>
                </div>
        </div>    
        </div>
        <FootBar/>
        </div>
    )
}

export default Contact