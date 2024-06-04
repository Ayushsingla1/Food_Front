const Project = (props)=>{
        return(
        <div className='mx-2 px-2 overflow-hidden rounded-3xl flex justify-center'>
            <img src={props.image} alt="Error" className='h-[60vh] w-[60vw] rounded-3xl hover:cursor-pointer hover:scale-110 object-cover transition-transform duration-300 ease-in-out'></img>
        </div>
    )
}

export default Project;