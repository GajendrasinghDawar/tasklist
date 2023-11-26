import './globals.css'
import { karla } from './font'
import { Navbar } from 'components/NavBar'

export const metadata = {
  title: 'tasklist',
  description: 'tasklist @gajendrsinghdwr',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.className}`}>
        <div className='h-screen flex flex-col relative  bg-sand1 gap-2 overflow-hidden'>
          <nav className="border-b sticky bg-sand2 border-slate5">
            <Navbar />
          </nav>
          <main className="flex-1 h-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
