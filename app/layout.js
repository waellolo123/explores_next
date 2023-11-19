import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({subsets: ['latin'], weight: ['300', '400', '500']})

export const metadata = {
  title: 'Explores',
  description: 'running, events are our passion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className='flex flex-col'>
         <Navbar />
         <div className='bg-gray-200'>
          {children}
         </div>
         <Footer />
        </div>
      </body>
    </html>
  )
}


