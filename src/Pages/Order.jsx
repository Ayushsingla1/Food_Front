import Navbar from "../components/NavBar";
import CenterMode from "../components/Slider";
import Cards from '../components/FoodMain'
import FootBar from "../components/FootBar";
const Order = ()=>{
    return(
    <div className="bg-Siuu bg-[#404040] w-[100vw] overflow-x-hidden">
        <div className="h-[100vh] overflow-x-hidden">
        <Navbar/>
        <CenterMode></CenterMode>
        </div>
        <h1 className="text-center text-5xl font-bold mb-20 text-gray-300 lg:mt-0 xs:mt-4">Our Menu</h1>
        <div className="mb-10 overflow-x-hidden">
        <Cards></Cards>
        </div>
        <FootBar></FootBar>
    </div>
    )
}

export default Order;