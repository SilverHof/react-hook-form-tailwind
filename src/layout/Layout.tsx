import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'


export const Layout = () => {
   return (
      <div className="wrapper">
         <Header />
         <main className="main">
            <Outlet />
         </main>
         <Footer />
      </div>
   )
}