import Image from "next/image";
import {BsPin, BsPinMapFill} from 'react-icons/bs';
import { FaPersonRunning } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";


const Card = () => {
  return (
    <div className="bg-white p-5 cursor-pointer w-[350px]">
       <Image src={"/images/run1.jpg"} width={300} height={100} alt="" className="w-full mb-3"/>
     <div className="flex flex-col">
      <h1 className="text-gray-400 text-center text-lg tracking-wide">Canada mountain Race</h1>
      <p className="text-center text-red-500">Sunday 19, May 2024</p>
      <p className="text-gray-300 text-center mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ipsam provident praesentium voluptatibus. Similique, mollitia! Consectetur dignissimos laboriosam eveniet eos!</p>
      <div className="flex items-center justify-center m-4">
       <Image src={"/images/1145447_OQVFOZ0.jpg"} width={100} height={100} alt="" className="rounded-full"/>
       <Image src={"/images/cursa.png"} width={200} height={100} alt="" className=""/>
      </div>
      <div className="">
       <div className="flex items-center gap-2 mt-2">
        <BsPinMapFill className="text-xl text-red-500"/>
        <span className="text-gray-400">Canada, Quebec 49dc</span>
        </div>
       <div className="flex items-center gap-2 mt-2">
        <FaPersonRunning className="text-xl text-green-500"/>
        <span className="text-gray-400">Marathon</span>
        </div>
       <div className="flex items-center gap-2 mt-2">
        <GiPayMoney className="text-xl text-gray-500"/>
        <span className="text-gray-400">Price TBC</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 mt-3">
       <span className="text-white text-sm py-1 px-3 bg-green-500 rounded-full">In Progress</span>
       <span className="text-white text-sm py-1 px-3 bg-yellow-500 rounded-full">Soon</span>
       <span className="text-white text-sm py-1 px-3 bg-gray-400 rounded-full">Finished</span>
      </div>
     </div>
    </div>
  )
}

export default Card