import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='container'>
    <h1 className="title">
      Our Home Page
    </h1>
    </div>
    </>
  )
}
