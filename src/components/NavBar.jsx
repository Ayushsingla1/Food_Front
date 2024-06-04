import { NavLink } from "react-router-dom"
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import './imp.css'
import { useState , useEffect} from "react";
import axios from "axios";
const Navbar = ()=>{
    const [logged,setlogged] = useState(false);
    const logged_in = async()=>{
        try{ 
        // axios.defaults.withCredentials = true;
         const res = await axios.get('https://foody-swart.vercel.app/api/v1/test');
         console.log(res)
         if(res.status===200){
             setlogged(true);
         }
         else{
            setlogged(false);
         }}
         catch(error){
            setlogged(false);
            console.error(error)
         }
     }
 
     useEffect(()=>{
         logged_in();
     })
 

    return(
        <div className="p-0 m-0 flex flex-col w-[100vw] bg-[#1F1F26] text-white">
            <div className="flex justify-between w-[100vw] h-[70px] items-center sm:flex xs:hidden gap-x-4">
                <div className="pl-6 flex items-center"><img src="https://res.cloudinary.com/dmnjig3al/image/upload/v1716919026/Devcomm/twkeitwzyrnwjw3iq8wp.png" alt ="Error" className=" opacity-80 lg:w-3/6 md:w-4/6 sm:w-5/6"></img></div>
                <div>
                <ul className="flex text-white md:pr-10 lg:text-lg md:text-base sm:text-base md:gap-x-4 sm:gap-x-3 sm:pr-6">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/Order'>Order</NavLink></li>
                    <li><NavLink to='/About'>About</NavLink></li>
                    <li><NavLink to='/Review'>Review</NavLink></li>
                    <li><NavLink to='/Contact'>Contact</NavLink></li>
                    {
                        logged ? (<li className="flex justify-center items-center pr-2 ml-2"><NavLink to='/Cart'><PiShoppingCartSimpleBold className="w-6 h-6"/></NavLink></li>) : (<li className="flex justify-center items-center"><NavLink to='/login'>LogIn/SignUp</NavLink></li>)
                    }
                    </ul>
                </div>
            </div>

            <div className="flex justify-between w-[100vw] h-[70px] items-center sm:hidden xs:flex">
                <div className="pl-6 flex items-center"><img src="https://res.cloudinary.com/dmnjig3al/image/upload/v1716919026/Devcomm/twkeitwzyrnwjw3iq8wp.png" alt ="Error" className="w-4/6 opacity-80"></img></div>
                <div className="flex justify-center items-center mr-6">
                <div className="dropdown">
                        <button className="dropbtn">More</button>
                        <div className="dropdown-content mt-4">
                        <ul className="flex flex-col text-whitetext-lg">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/Order'>Order</NavLink></li>
                        <li><NavLink to='/About'>About</NavLink></li>
                        <li><NavLink to='/Review'>Review</NavLink></li>
                        <li><NavLink to='/Contact'>Contact</NavLink></li>
                        {
                        logged ? (<li className="flex justify-center items-center"><NavLink to='/Cart'><PiShoppingCartSimpleBold className="w-6 h-6 font-bold"/></NavLink></li>) : (<li className="flex justify-center items-center"><NavLink to='/login'>LogIn/SignUp</NavLink></li>)
                        }
                        </ul>
                        </div>
                    </div>
                    </div>
            </div>

            <div className="bg-[#FFB8B8] w-[100vw] h-[5px]"></div>
        </div>
    )
}

export default Navbar;
