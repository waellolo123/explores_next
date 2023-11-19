import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Explores',
  description: 'running, events are our passion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col'>
         <Navbar />
         <div className=''>
          {children}
         </div>
         <Footer />
        </div>
      </body>
    </html>
  )
}


