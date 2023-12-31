import Footer from './components/Footer'
import { Navbar } from './components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        {/* <link href="../../../node_modules/aos/dist/aos.css" rel="stylesheet"/>
        <script src="../../../node_modules/aos/dist/aos.js"></script> */}
      </head>
      <body className={`${inter.className} scroll-smooth`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
