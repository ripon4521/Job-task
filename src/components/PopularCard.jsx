import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const PopularCard = () => {
    const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10'); // Replace with the correct API endpoint
        const data = await response.json();
        setItems(data.Items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);
//   console.log(items)

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }
    return (
        <div className="max-w-7xl mx-auto mt-20">
            <div className="flex justify-between py-5 px-2 md:px-0">
            <h3 className="font-inter text-xl ">Popular</h3>
            <p className="flex items-center text-orange-500 text-xl gap-2">AddMore <span className="flex items-center text-xl "><IoIosArrowBack className="text-gray-400"/><IoIosArrowForward className="text-black "/></span></p>
            </div>


            <div className="md:flex gap-5 hidden ">
                {
                    items?.slice(0,4).map((data, i)=>   <div key={i}  className="">
                        <img className="w-80 h-80 rounded-3xl" src={data?.ImageUrl} alt="" />
                        <p className="ml-14 text-xl font-inter my-2">{data?.Name}</p>
                    </div>)
                }
              
            </div>

            <div className="flex gap-5 md:hidden px-2">
                {
                    items?.slice(0,3).map((data, i)=>   <div key={i}  className="">
                        <img className="w-80 h-80 rounded-3xl" src={data?.ImageUrl} alt="" />
                        <p className="ml-14 text-xl font-inter my-2">{data?.Name}</p>
                    </div>)
                }
              
            </div>


        </div>
    );
};

export default PopularCard;