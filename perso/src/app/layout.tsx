import './globals.css'
import { Inter } from 'next/font/google'
import AppSidebar from '../components/sidebar'
import AppMenubar from '@/components/menubar'

 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppMenubar></AppMenubar>
        <AppSidebar></AppSidebar>
        {children}</body>
    </html>
  )
}
