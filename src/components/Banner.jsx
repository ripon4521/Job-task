import bannerImg from '../../public/Image1.png'

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto '>
           <div className=' justify-between  h-96 bg-yellow-400 mt-20 rounded-3xl px-20 hidden md:flex '>
           <div className='mt-16'>
            <h1 className='text-6xl font-inter text-white font-semibold drop-shadow-md '>Deliver Food To Your Door Step!</h1>
            <p className='mt-6 text-xl text-gray-600 font-inter'>Authentic Food | Quick Service, Fast Delevery</p>
            </div>
            <div>
                <img className='h-96' src={bannerImg} alt="" />
            </div>
           </div>

           <div className='flex justify-between  h-96   rounded-3xl  md:hidden  flex-col mt-10'>
           <div className='px-5'>
            <h1 className='text-3xl font-inter  font-semibold drop-shadow-md  text-center '>Deliver Food To Your Door Step!</h1>
            <p className='mt-2  text-gray-600 font-inter text-center text-base'>Authentic Food | Quick Service, Fast Delevery</p>
            </div>
            <div className='bg-yellow-400 mt-10 rounded-3xl'>
                <img className='' src={bannerImg} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Banner;