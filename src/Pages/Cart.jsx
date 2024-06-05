import Navbar from "../components/NavBar";
import FCart from "../components/Fcart";
import { useSelector } from "react-redux";
import FootBar from "../components/FootBar";
import { useState,useEffect } from "react";
import axios from "axios";
const  Cart = () =>{
    const {cart} = useSelector((state)=>(state));
    const [amount,setamount] = useState(0);

    const logged_in = async()=>{
       try{ 
        const res = await axios.get('https://food-back-5pkd.onrender.com/api/v1/test');
        if(!res.success){
            return window.location.replace('/');
        }
        }
        catch{
            window.location.replace('/')
        }
    }

    useEffect(()=>{
        logged_in();
    })

    useEffect(()=>{
        setamount(cart.reduce((acc,curr) => acc+curr.price ,0),);
    },[cart])
    console.log(cart)

    const tax = amount * 5/100;
    return(
        cart.length ===0 ? (<div className="overflow-x-hidden"><Navbar/><div className="flex w-[100vw] h-[100vh] justify-center items-center">Cart is Empty</div></div>) : (<div className="overflow-x-hidden bg-Siuu">
        <Navbar/>
        <div className="min-h-[100vh]">
        <div className="font-bold text-3xl pt-10 text-center">YOUR CART</div>
        <div className="w-[100vw] lg:grid lg:grid-cols-[55fr,45fr]">
        <div className="flex flex-col w-[100%] gap-y-10 mt-20 pr-16 border-r-2">
        { 
        cart.map((item)=>{
            return (
                <FCart item={item} key={item._id}/>)
        })
        }
        </div>
       <div className="mt-20 mb-10">
       <div className="flex justify-center">
            <div className="flex flex-col lg:w-[50%] md:w-[50%] px-5 border rounded-lg py-4">
                <div className="text-3xl font-bold border-b-stone-400 border-b-2 w-[100%] self-start pt-4 pb-3">Order Summary</div>
                
                <div className="border-b-2 border-b-stone-400">
                <div className="border mt-4 mb-4">
                    <form classname="flex border-b-2">
                        <input type="text" placeholder="Promocode" className="w-[80%] h-10 pl-2 text-lg"></input>
                        <button className="w-[20%] text-center border-l-2 font-semibold text-lg">Apply</button>
                    </form>
                </div>
                </div>

                <div className="flex flex-col self-start w-[100%] pt-4 border-b-stone-400 border-b-2 pb-4 gap-y-2">
                    <div className="flex flex-row justify-between">
                        <div>Subtotal: </div>
                        <div>{amount}</div>
                    </div>
                    <div className="flex justify-between">
                        <div>Tax: </div>
                        <div>{tax}</div>
                    </div>          
                </div>
                <div className="flex flex-col gap-12 pt-5">
                <div className="flex justify-between text-3xl font-bold">
                    <div>Total</div>
                    <div>{amount+tax}</div>
                </div>
                <div className="flex flex-col gap-y-5 pb-6">
                <div className="flex justify-center"><button className="w-[80%] h-12 bg-white border font-semibold text-lg">Continue Shopping</button></div>
                <div className="flex justify-center"><button className="w-[80%] h-12 bg-black text-white text-lg font-semibold border">Checkout</button></div>
                </div>
                </div>
            </div>
        </div>
       </div>
        </div>
        </div>
        <FootBar/>
    </div>)
        
    )
}

export default Cart;
