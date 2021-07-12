import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between leading-relaxed font-Inter">
      <Header />
      <main className="mb-auto w-full">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
