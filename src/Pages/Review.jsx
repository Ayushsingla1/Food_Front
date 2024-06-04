import { useEffect , useState } from "react";
import axios from "axios";
import Navbar from "../components/NavBar";
import FootBar from "../components/FootBar";
import RCard from "../components/Rcard";
import toast from "react-hot-toast";

const Review = ()=>{
    const [reviews,setreviews] = useState([]);
    const [entry,setentry] = useState({name : "" , review : ""});

    const changeHandler = (event)=>{
        const {name,value} = event.target;
        setentry((prev)=>{
            return {
                ...prev , [name] : value 
            }
        })
    }

    const submitHandler = async(event)=>{
        event.preventDefault();
        const {name,review} = entry;
        await axios.post('https://foody-swart.vercel.app/api/v1/reviews',{entry})
        .then(toast.success('Message Sent'))
        .catch(err => console.log(error))
    }

    async function fetcher(){
        const res = await axios.get('https://foody-swart.vercel.app/api/v1/review');
        const response = res.data.data
        setreviews(response.slice(0,6));
    }

    useEffect(()=>{
        fetcher();
    },[]);

    return (
        <div className="w-[100vw] h-[100vh] bg-Siuu bg-[#404040] overflow-x-hidden">
            <Navbar/>
            <h1 className="text-center mt-8 text-3xl font-bold text-gray-200">What people Thinks About Us</h1>
            <div className="grid grid-rows-1 justify-items-center gap-10 pt-24 lg:grid-cols-2 lg:grid-rows-3 md:grid-cols-2 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-5 xs:grid-cols-1 xs:grid-rows-5 w-[100%]">
               { reviews.map((rev,index)=>{
                    return (
                        <div key={index} className="width-[100%]">
                            <RCard rev = {rev} className="width-[100%]"/>
                        </div>
                    )
                })}
            </div>
            <div className="flex w-[100vw] justify-center items-center lg:h-[45%] mt-10 mb-10">
                <form className="flex flex-col gap-y-5 justify-center items-center h-[80%] md:w-[60%] sm:w-[90%] xs:w-[90%] bg-slate-300 rounded-lg">
                    <div className="text-xl font-semibold lg:mt-1  xs:mt-3">Please Share Your Valuable Review</div>
                    <div className="flex justify-center items-center gap-5">
                    <label htmlFor="name">Name : </label>
                    <input type="text" name = "name" value={entry.name} onChange={changeHandler} placeholder="Enter Your Name" id="name" className="lg:w-96 md:w-80 h-12 rounded-md pl-2 pr-2 text-lg"></input>
                    </div>
                    <div className="flex justify-center gap-5 items-center">
                    <label htmlFor="review">Review : </label>
                    <input type="text" name = "review" value = {entry.review} onChange={changeHandler} placeholder="Enter the review" id="review" className="lg:w-96 md:w-80 h-16 rounded-md pl-2 pr-2 text-lg"></input>
                    </div>
                    <div className="xs:pb-5 lg:pb-1 md:pb-3">
                        <input type="submit" value="SEND" onClick={submitHandler} className="font-semibold bg-[#E94475] p-2 w-24 rounded-md" />
                    </div>
                </form>
            </div>
            <FootBar/>
        </div>
    )
}

export default Review;
