const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between leading-relaxed font-Inter">
      <main className="mb-auto w-full">{children}</main>
    </div>
  )
}

export default Layout
