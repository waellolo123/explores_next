"use client";

const Section1 = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200">
      <div className="flex items-center p-20 flex-wrap">
        <div className="w-[50%] flex items-center justify-center">
        <iframe width="716" height="403" src="https://www.youtube.com/embed/EI5kcidFN6Y" title="BigK trailer 2023" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>  
        <div className="w-[50%] bg-gray-200 p-8">
          <p className="text-slate-400 leading-7 text-lg ">Mountain running is a challenging and rewarding form of exercise that offers many benefits. According to a 1 source, running uphill increases muscle strength in the quadriceps, glutes, calves, hamstrings, and trunk. The hip flexors and Achilles tendons are also strengthened. Running uphill also trains the core very efficiently. In addition, if the track is uneven, the entire musculoskeletal system is involved, because with each step the foot touches the ground differently, and therefore more stabilization is needed. The demands of the stride change constantly, and the arms also have to push harder than in a flat run. This results in greater versatility and coordination, especially in the case of trail running. Running uphill also increases speed and endurance. The muscles used for running uphill are the same as those used for sprinting.</p>
          <button className="text-white text-xl mt-4 bg-slate-400 px-4 py-2 hover:shadow-lg cursor-pointer transition-all">About last Event</button>
        </div>
      </div>
    </div>
  )
}

export default Section1



