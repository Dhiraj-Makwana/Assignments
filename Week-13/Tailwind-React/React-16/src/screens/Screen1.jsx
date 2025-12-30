import webinar from "../assets/Webinar.png"

export default function Page_1() {
    return(
        <div className='bg-blue-950 h-screen flex justify-center items-center'>
            <div className='flex-col'>
                <div className='flex gap-2 m-13'>
                    <div className='w-11'><img src={webinar} alt="Webinar" /></div>
                    <div className='flex text-green-200 text-4xl font-medium'>Webinar<div className='text-sky-50'>.gg</div></div>
                </div>
                <div className='text-white text-2xl font-bold m-13'>Verify Your Age</div>
                <div className='text-blue-200 mb-2'>Please confirm your birth year. This data will not be stored.</div>
                <div className='bg-blue-300 p-3 rounded-xl w-72 ml-10 mb-5'><input type="text" placeholder="Your Birth Year" /></div>
                <div className='bg-cyan-300 p-3 rounded-xl text-white font-bold w-72 ml-10'><button>Continue</button></div>
            </div>
        </div>
    )
}