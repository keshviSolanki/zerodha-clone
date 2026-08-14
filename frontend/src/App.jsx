
import './App.css'

//components
import HomePage from './landing_page/home/HomePage.jsx'
import SignPage from './landing_page/signin/SignUp.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import PricingPage from './landing_page/pricing/Pricingpage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'


//route mate
import { Routes, Route } from "react-router-dom";



import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import NotFound from './landing_page/NoteFound.jsx'



function App() {


  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={< SignPage/>} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
