import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import Navbar from '@/component/navbar/Navbar'
import Footer from '@/component/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
  image: '../public/favicon.ico'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description}></meta>
        <link rel='icon' href='../public/favicon.ico'/>
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}