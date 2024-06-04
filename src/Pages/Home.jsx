import FootBar from "../components/FootBar";
import Navbar from "../components/NavBar"
const Home = ()=>{
    return(
        <div className="w-[100%] h-[100vh] overflow-x-hidden p-0 m-0">
            <Navbar></Navbar>
            <div className="p-0 m-0 h-[92vh] w-[100%]"><img className="p-0 m-0 h-[92vh] w-[100%] object-cover" src="https://res.cloudinary.com/dmnjig3al/image/upload/v1716919032/Devcomm/bjidwn2njh2m9zgbvhtl.jpg" alt="error"/></div>
            <div className="flex justify-evenly mt-10 min-h-[100vh] md:flex-row xs:flex-col xs:gap-y-4 md:gap-y-0 xs:h-fit mb-4">
            <div className="lg:w-[30vw] md:w-[40vw] flex flex-col justify-center items-center text-lg font-semibold text-justify gap-12 text-slate-500">
            <div className="md:self-start test-justify lg:text-3xl md:text-2xl xs:self-center">Elegance Beyond Compare</div>
            <div className="lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:px-4 md:px-0">At Food-a-amoure, we believe that every meal should be a culinary adventure. Nestled in the heart of the city, our restaurant offers a unique dining experience that combines exceptional cuisine, warm hospitality, and a vibrant ambiance. Since our founding in 2010, we have been dedicated to delighting our guests with innovative dishes inspired by the rich flavors of Italian cuisines.</div>
            </div>
            <div className="md:w-[45vw] sm:w-[100vw] flex justify-center items-center"><img src="https://res.cloudinary.com/dmnjig3al/image/upload/v1716919038/Devcomm/tma6pbk4vj7pnyzigaqq.jpg" alt="Error" className="md:w-[100%] xs:w-[90%] lg:h-[60vh] md:h-[70vh] sm:h-[40vh] md:pr-10 sm:pr-0 object-cover"></img></div>
            </div>
            <FootBar></FootBar>
        </div>
    )
}
export default Home;
