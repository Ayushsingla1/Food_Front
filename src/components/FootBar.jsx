import { SocialIcon } from 'react-social-icons'
const FootBar = ()=>{
    return (
        <div className="p-0 m-0 bg-[#1F1F26] flex flex-col gap-y-6 items-center pt-8 xs:hidden sm:flex sm:flex-col">
            <div className="text-white flex justify-center items-center gap-x-28">
                <div className="flex gap-x-28">
                    <div className="flex flex-col gap-y-4 ">
                        <div>About</div>
                        <div>Login</div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div>Order Now</div>
                        <div>Contact Us</div>
                    </div>
                </div>
                <div className='border-r-2 h-20'></div>
                <div className="flex flex-col gap-y-4 items-center">
                    <div>Socials</div>
                    <div className="flex gap-x-10">
                        <div><SocialIcon url="www.x.com" bgColor='#E94475' fgColor='white' /></div>
                        <div><SocialIcon url="www.instagram.com" /></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-x-8 text-white">
                <div>Contact Us</div>
                <div className='border-r-2'></div>
                <div>Terms and Conditions</div>
                <div className='border-r-2'></div>
                <div>Privacy Policy</div>
            </div>
        </div>
    )
}

export default FootBar;