import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import MyProfilePicture from "@/components/MyProfilePicture";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rustem`s Blog',
  description: 'Abdulaev Rustem blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-slate-800">
      <Navbar/>
      <MyProfilePicture/>
      {children}
      </body>
    </html>
  )
}
