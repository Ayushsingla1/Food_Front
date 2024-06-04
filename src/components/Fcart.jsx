import { useDispatch } from "react-redux";
import { removeItem } from "../Store/CartSlice";
const FCart = ({ item }) => {
    const { name, image, description, _id, price } = item;
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col md:flex-row rounded-md ml-10 justify-between bg-slate-400 h-50">
            <div className="md:w-1/4 h-40 md:h-auto">
                <img src={image} alt={name} className="w-full h-full object-cover object-center"></img>
            </div>
            <div className="flex flex-col md:w-3/4 pl-4 justify-between gap-y-4 pr-4">
                <div>
                    <div className="text-justify font-semibold text-lg">{name}</div>
                    <div className="text-justify">{description}</div>
                </div>
                <div className="flex justify-between mb-3">
                    <div>{price}</div>
                    <div className="flex items-center text-center bg-green-600 h-8 rounded-md px-1">
                        <button onClick={() => { dispatch(removeItem(_id)) }}>Remove Item</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FCart;