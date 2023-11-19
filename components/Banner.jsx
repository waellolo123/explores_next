import Link from "next/link"

const Banner = () => {
  return (
    <div className="px-2 py-3 bg-gray-200 text-white flex items-center justify-around">
    <button className="bg-white px-3 py-1 skew-x-[-20deg] text-slate-400"><Link href={"/Events"} className="link">You need Equipments?</Link></button>
     <h3 className="text-sm text-gray-700 font-semibold">Next Event is in Castellbisbal Spain 20km on 18-02-2024</h3>
    <button className="bg-gray-700 px-3 py-1 skew-x-[-20deg] hover:shadow-md hover:shadow-gray-700 transition-all"><Link href={"/Events"} className="link">Participate</Link></button>
    </div>
  )
}

export default Banner