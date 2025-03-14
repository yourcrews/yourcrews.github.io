import {  Plus_Jakarta_Sans } from 'next/font/google'
import '../common/style/globals.css'
import Navbar from '@/common/component/navbar/Navbar'
import Footer from '@/common/module/Footer'
import { Providers } from '@/common/component/element/Providers'
import Script from 'next/script'

const plus_Jakarta_Sans = Plus_Jakarta_Sans({subsets: ['latin']});

export const metadata = {
  title: 'sieve',
  description: 'AI data quality agents',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/themes/prism-okaidia.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${plus_Jakarta_Sans.className} dark:bg-black`}>
        <Providers>
        <div className='flex justify-center items-center'>
          <Navbar />
        </div>
        {children}
        <div className='flex justify-center items-center'>
          <Footer />
        </div>
        </Providers>
        <Script
          src="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/prism.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/components/prism-python.min.js"
          strategy="afterInteractive"
        />
        </body>
    </html>
  )
}
