import About from "../../Components/Home/About"
import Customer from "../../Components/Home/Customer"
import Enjoyment from "../../Components/Home/Enjoyment"
import Hero from "../../Components/Home/Hero"
import Pricingplan from "../../Components/Home/Pricingplan"
import Whychooseus from "../../Components/Home/Whychooseus"


function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Customer/>
      <Whychooseus/>
      <Enjoyment/>
      <Pricingplan/>
    </>
  )
}

export default Home