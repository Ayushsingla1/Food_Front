import { useSelector , useDispatch } from "react-redux";
import { removeItem , addItem } from "../Store/CartSlice";
import toast from "react-hot-toast";
const Card = ({item})=>{
    const {_id,name,description,image,price} = item;
    const {cart} = useSelector((state)=>(state))
    const dispatch = useDispatch();

    function removeHandler(){
        toast.error("Item Removed")
        dispatch(removeItem(item._id));
    }
    function addHandler(){
        toast.success("Item Added")
        dispatch(addItem(item))
    }

    return(
        <div className="flex flex-col gap-2 items-center justify-evenly h-[550px] sm:w-96 xs:w-80 border-4 border-blue-200 box-border font-semibold bg-slate-300 transition-transform hover:scale-105 mt-5 mb-5 ease-in-out duration-300 rounded-lg">
            <div className="w-[100%] h-[60%]"><img className="w-[100%] h-[100%] object-cover rounded-lg" src={image} alt="Error"></img></div>
            <div className="flex justify-between w-[100%] px-1">
                <div>{name}</div>
                <div>{price}</div>
            </div>
            <div className="text-justify px-1">{description}</div>
            <div className="self-end px-1">{cart.some((p)=> p._id===_id)? (<button onClick={removeHandler} className="text-center bg-green-600 h-8 rounded-md px-1">Remove Item</button>) : (<button onClick={addHandler} className="text-center bg-green-600 px-1 rounded-md h-8">Add Item</button>) }</div>
        </div>
    )
}
export default Card;