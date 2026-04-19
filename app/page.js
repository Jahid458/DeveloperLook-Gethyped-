import Cards from "./components/cards/cards"
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
   
    </div>
  )
}

export default page