import Dropdawon from "./Dropdawon";
import { FaRegUser } from "react-icons/fa";



const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto px-2 md:px-0">
            <div className="flex justify-between py-5 items-center">
            <h1 className="text-2xl font-inter font-bold drop-shadow-md">pti.</h1>
   <div className="flex md:gap-10 items-center gap-3">
   <label className="input h-10 md:w-96 w-40 flex items-center gap-2 ">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70 text-red-500 "><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text" className="grow" placeholder="Search" />
 
</label>
<Dropdawon/>
   </div>

<p className="text-2xl bg-orange-600 p-2 rounded-full text-white hidden md:block"><FaRegUser/></p>
            </div>
           
        </div>
    );
};

export default Navbar;