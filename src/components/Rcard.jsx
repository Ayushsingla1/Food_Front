 
const RCard = (rev)=>{
    const {name,review} = rev.rev
    return(
        <div className="flex rounded-lg bg-slate-100 lg:w-[525px] md:w-[400px] sm:w-[450px] xs:w-[325px]">
            <div className="w-[30%]"><img src="https://res.cloudinary.com/dmnjig3al/image/upload/v1717084897/Devcomm/gtbi0samsxf62aen57mu.jpg" alt="Error" className="w-[100%] h-40 object-cover"></img></div>
            <div className="flex flex-col pl-6 pt-4 w-[70%] pr-2">
                <div className="text-justify text-lg self-start font-semibold text-gray-500">{review}</div>
                <div className="font-bold text-xl self-start">{name}</div>
            </div>
        </div>
    )
}

export default RCard;
