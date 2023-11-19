import Image from "next/image";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { MdEmojiEvents } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlinePersonPin } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
   <nav className="bg-[#dd0f1a] text-white flex items-center justify-center">
    <div className="flex items-center justify-between w-full py-2  px-8">
      <Image src="/images/explores_logo.png" width={80} height={50} alt="logo" /> 
      <div className="flex items-center gap-4">
       <button><FaSearch className="text-2xl"/></button>
        <input className="px-2 py-1 skew-x-[-20deg] text-gray-500"
         type="text" placeholder="Search" 
         />
      </div>
      <ul className="flex gap-5">
        <Link href={"/"} className="text-sm hover:text-gray-300 transition-all flex items-center gap-1 cursor-pointer"><GoHomeFill /> Home</Link>
        <Link href={"/"} className="text-sm hover:text-gray-300 transition-all flex items-center gap-1 cursor-pointer"><MdEmojiEvents />Events</Link>
        <Link href={"/"} className="text-sm hover:text-gray-300 transition-all flex items-center gap-1 cursor-pointer"><FaShoppingBag />Shop</Link>
        <Link href={"/"} className="text-sm hover:text-gray-300 transition-all flex items-center gap-1 cursor-pointer"><MdOutlinePersonPin />About</Link>
      </ul>
      {/* <div className="flex gap-2">
       <button className="bg-transparent border border-white px-4 skew-x-[-20deg] cursor-pointer"><Link href={"/login"} className="link">Login</Link></button>
       <button className="bg-transparent border border-white px-4 skew-x-[-20deg] cursor-pointer"><Link href={"/login"} className="link">Register</Link></button>
      </div> */}
      <div className="flex items-center justify-center gap-8 hover:border-white transition-all">
        <Link href={"/profile"}>
        <Image
         className="border" 
         src={"/images/man.jpg"} width={60} height={70} alt=""/>
        <span className="text-slate-100 text-sm">John Doe</span> 
        </Link>
        <button className="border border-white text-sm px-3 py-1 skew-x-[-20deg]" ><Link href={"/login"}>Logout</Link></button>
      </div>
    </div>
   </nav>
  )
}

export default Navbar


