import { useEffect, useState } from "react";
import Card from "./Food";
import axios from "axios";
const Cards = ()=>{
    const [data,setdata] = useState([]);

    async function fetchfood(){
        // axios.defaults.withCredentials = true;
        const res = await axios.get('api/v1/items');
        const response =  res.data.data;
        setdata(response);
    }

    useEffect(()=>{
        fetchfood();
    },[])

    return(
        <div className="h-fit grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-6 xs:grid-cols-1 xs:grid-rows-6 grid-flow-col align-middle justify-center justify-items-center gap-y-10">
            {
                data.map((item)=>{
                    return <Card item={item} key={item._id}/>
                })
            }
        </div>
    )
}
export default Cards;
