import Image from "next/image"

const Header = () => {
  return (
    <div className="w-full h-[100vh] bg-[url('/images/Davide_Trofeo_small_web-850dd8b6.jpeg')] bg-cover bg-center bg-no-repeat p px-5 flex items-center justify-center gap-4 relative">
     <div className="w-full h-full absolute bg-black opacity-80"></div>   
     <div className="w-[80%] mx-auto z-10 flex flex-col gap-5">
     <Image
     className=""
     src={"/images/explores_word.png"} width={400} height={200} alt="" />
      <p className="text-white text-lg w-[60%]">The EXPLORES Initiative materialized through the support of trail runners and running enthusiasts, international race directors and volunteers who are determined to bring peace and goodwill to the world through the running. Our programs are focused on discovering beautiful and unknown towns across the world. If you feel that you are ready to change your lifestyle, come to EXPLORES you will find inspiration and motivation, just join our community! Our moto is simple You never go home with empty hands.</p>
      <button className="border border-[#dd0f1a] w-[max-content] text-[#dd0f1a] px-8 py-2 skew-x-[-20deg] text-xl">Discover Events</button>
     </div>
     {/* <div className="w-[50%]"></div> */}
    </div>
  )
}

export default Header