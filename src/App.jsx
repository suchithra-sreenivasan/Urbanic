import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Campaign from './pages/Campaign'
import Dresses from './pages/Dresses'
import Denim from './pages/Denim'
import Tops from './pages/Tops'
import Pants from './pages/Pants'
import Everyone from './pages/Everyone'
import Freshfind from './pages/Freshfind'
import Denimcomp from './pages/Denimcomp'
import ScrollToTop from './pages/ScrollTop'
import Newin from './pages/Newin'

function App() {
  

  return (
    <>
    <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/campaign' element={<Campaign/>}/>
        <Route path='/dresses' element={<Dresses/>}/>
        <Route path='/denim' element={<Denim/>}/>
        <Route path='/tops' element={<Tops/>}/>
        <Route path='/pants' element={<Pants/>}/>
        <Route path='/everyone-has' element={<Everyone/>}/>
        <Route path='/fresh-find' element={<Freshfind/>}/>
        <Route path='/Denimcomp' element={<Denimcomp/>}/>
        <Route path='/newsin' element={<Newin/>}/>

      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
