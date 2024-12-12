import Navbar from '@/app/Navbar'
import '@/app/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-screen overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}