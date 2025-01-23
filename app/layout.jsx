import '@/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          id="main-app-div"
          className="flex flex-col w-full mx-auto min-h-screen justify-between text-gray-900"
        >
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
