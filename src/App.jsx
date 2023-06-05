import './App.css'
import Banner from './components/Banner/Banner'
import CursorFollower from './components/CursorFollower'
import Demo from './components/Demo/Demo'
import Footer from './components/Footer/Footer'
import InnerPages from './components/InnerPages/InnerPages'
import LoadSpeed from './components/LoadSpeed/LoadSpeed'
import Navbar from './components/Navbar/Navbar'
import Support from './components/Support/Support'
import Testimonials from './components/Testimonials/Testimonials'
import ThemeFeatures from './components/ThemesFeatues/ThemeFeatures'
import UltimateShopping from './components/UltimateShopping/UltimateShopping'
import Video from './components/Video/Video'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Video />
      <Demo />
      <InnerPages />
      <ThemeFeatures />
      <LoadSpeed />
      <UltimateShopping />
      <Testimonials />
      <Support />
      <Footer />
      <CursorFollower />
    </>
  )
}

export default App
