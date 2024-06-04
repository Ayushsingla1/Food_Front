import FootBar from "../components/FootBar";
import Navbar from "../components/NavBar";


const About = ()=>{
    return(
        <div className="overflow-x-hidden bg-Siuu">
            <Navbar/>
            <h1 className="text-center font-bold text-4xl mt-8 ">ABOUT US</h1>
            <div className="w-[100vw] flex justify-center mt-10 mb-10">
                <div className="flex justify-around font-semibold text-justify lg:w-[70%] lg:flex-row md:w-[70%] md:flex-row sm:flex-col sm:w-[90%] xs:w-[90%] xs:flex-col">
                    <div className="flex lg:justify-start md:justify-start sm:justify-center sm:pb-4 xs:justify-center pb-4"><img src="https://res.cloudinary.com/dmnjig3al/image/upload/v1717182139/femsixrrryeot8s8xb5k.jpg" alt = "Error"className="w-[70%] object-cover rounded-md"></img></div>
                    <div className="flex justify-center items-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ea quibusdam exercitationem dolore eum qui animi molestiae cumque amet recusandae nesciunt praesentium temporibus sequi minus sapiente veniam nisi ullam nobis, alias vel. Nam dicta omnis non sapiente, quisquam quibusdam adipisci vitae perferendis sit perspiciatis unde quas sed voluptatibus consectetur at!</div>
                </div>
            </div>

            <h1 className="text-center font-bold text-4xl mt-8">Our Vision</h1>

            <div className="w-[100vw] flex justify-center mt-10 mb-10">
                <div className="flex lg:flex-row-reverse justify-around font-semibold text-justify w-[70%] lg:w-[70%]  md:w-[70%] md:flex-row-reverse sm:flex-col sm:w-[90%] xs:w-[90%] xs:flex-col">
                    <div className="flex lg:justify-end md:justify-end sm:justify-center sm:pb-4 xs:justify-center pb-4"><img src="https://res.cloudinary.com/dmnjig3al/image/upload/v1717182139/femsixrrryeot8s8xb5k.jpg" alt = "Error"className="w-[70%] object-cover rounded-md"></img></div>
                    <div className="flex justify-center items-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ea quibusdam exercitationem dolore eum qui animi molestiae cumque amet recusandae nesciunt praesentium temporibus sequi minus sapiente veniam nisi ullam nobis, alias vel. Nam dicta omnis non sapiente, quisquam quibusdam adipisci vitae perferendis sit perspiciatis unde quas sed voluptatibus consectetur at!</div>
                </div>
            </div>
            <FootBar/>
        </div>
    )
}

export default About;
