import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <Banner />
      <Header />
      <Section1 />
      <Section2 />
    </div>
  )
}
