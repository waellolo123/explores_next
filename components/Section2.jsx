import Image from "next/image"
import Card from "./Card"

const Section2 = () => {
  return (
    <div className="h-[100vh] bg-[url('/images/cool-man-with-tattoos-ultra-trail-runner.jpg')] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold mb-8 text-white bg-red-600 px-5 py-2">Checkout Our Latest Events</h1>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Section2


