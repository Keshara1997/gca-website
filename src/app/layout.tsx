import './globals.css'
import Navbar from '../components/ui/Navbar'

export const metadata = {
  title: 'Global Counsellor Association (GCA)',
  description: 'Empowering Counsellors. Transforming Lives. Connecting the World.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gray-50 text-slate-900'>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
