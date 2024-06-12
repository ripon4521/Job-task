import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footerimg from '../../public/Image2.png'
import { FaLongArrowAltRight } from "react-icons/fa";





const Footer = () => {
    return (
        <div className=" bg-yellow-400">
           <div className="max-w-7xl mx-auto ">
           <div className="md:flex mt-24 pt-5  justify-between hidden">
           <div className="mt-20">
           <label className="input h-10 md:w-96 w-40 flex items-center gap-2 ">

  <input type="text" className="grow" placeholder="Enter Your Email" />
  <button className="flex items-center font-inter text-base bg-red-500 text-white px-5 py-1 rounded-md">Subscribe<FaLongArrowAltRight/></button>
  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70 text-red-500 "><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg> */}
 
</label>
<div className="mt-20">
    <h1 className="text-3xl font-inter font-bold">pti<span className="text-4xl text-red-500">.</span></h1>
    <div className="flex justify-between gap-5">
    <p className="font-inter mt-2">Copyright&copy;Tripp. All rights reserved</p>
    <div className="flex gap-1 items-center mt-2">
        <p className="bg-red-100 p-2 rounded-full text-red-500"><FaGoogle/></p>
        <p className="bg-red-100 p-2 rounded-full text-red-500"><FaTwitter/></p>
        <p className="bg-red-100 p-2 rounded-full text-red-500"><FaInstagram/></p>
    </div>
    </div>
    
</div>
           </div>
<div>
    <img src={footerimg} alt="" className="h-80" />
</div>
            </div>




            <div className="flex mt-24 pt-5  justify-between md:hidden">
           <div className="mt-20 px-5">
           <label className="input h-10 md:w-96  flex items-center gap-2  ">

  <input type="text" className="grow" placeholder="Enter Your Email " />
  <button className="flex items-center font-inter text-base text-red-500  md:px-5 px-2 py-1 rounded-md">Subscribe<FaLongArrowAltRight/></button>
 
 
</label>
<div className="mt-20">
   
    <div className="flex justify-center items-center text-center gap-5 flex-col">
   
    <div className="flex gap-1 items-center mt-2 ">
        <p className="bg-red-100 p-2 rounded-full text-red-500"><FaGoogle/></p>
        <p className="bg-red-100 p-2 rounded-full text-red-500"><FaTwitter/></p>
        <p className="bg-red-100 p-2 rounded-full text-red-500"><FaInstagram/></p>
     
    </div>
    <div>
      <h1 className="text-3xl font-inter font-bold">pti<span className="text-4xl text-red-500">.</span></h1>
      <p className="font-inter mt-2 pb-5">Copyright&copy;Tripp. All rights reserved</p>
      </div>
    </div>
   
    
</div>
           </div>
<div>
    <img src={footerimg} alt="" className="h-80 hidden" />
</div>
            </div>













           </div>
        </div>
    );
};

export default Footer;