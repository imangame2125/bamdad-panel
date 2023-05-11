import Footer from "./footer"
import Header from "./header"
import Main from "./main"

function Layout({ children }) {
  return (
    <>
      <Header name='ایمان مجدآبادی فراهانی' />
      <Main
       >
        {children}
      </Main>
      <Footer />
    </>

  )
}

export default Layout