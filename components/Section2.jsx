import Image from "next/image"
import Card from "./Card"

const Section2 = () => {
  return (
    <div className="h-[100vh] bg-[url('/images/cool-man-with-tattoos-ultra-trail-runner.jpg')] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center">
      <div className="flex items-center justify-center gap-5 flex-wrap">
        <Card />
      </div>
    </div>
  )
}

export default Section2


