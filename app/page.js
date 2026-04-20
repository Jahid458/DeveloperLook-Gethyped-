import BrandCarousel from "./components/BrandCarousel/BrandCarousel"
import Cards from "./components/cards/cards"
import ContentDatScoort from "./components/content/content"
import Footer from "./components/Footer/Footer"
import Lees from "./components/Lees/Lees"
import Hero from "./components/Navbar/Hero"
import Navbar from "./components/Navbar/Navbar"




const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Lees />
      <Cards/>
      <ContentDatScoort />
      <BrandCarousel/>
      <Footer/>
      
   
    </div>
  )
}

export default page