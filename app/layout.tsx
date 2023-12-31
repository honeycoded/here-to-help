import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@fontsource/monda';
import '@fontsource/mogra';
import '@fontsource-variable/montserrat';
import '@fontsource/moulpali';
import '@/public/index.css'
import Footer from '@/components/Footer';
import Provider from '@/components/Provider';
import ModalTemplate from '@/components/modals/ModalTemplate';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Here to Help',
  description: 'Where employers and employees meet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Provider>
          <ModalTemplate />
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
