import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Homepage from "./Pages/Homepage"
import Aboutpage from "./Pages/Aboutpage"

import Projectpage from "./Pages/Projectpage"
import Contactpage from "./Pages/Contactpage"
import Timelinepage from "./Pages/Timelinepage"
import Bitcube from "./Components/Bitcube"





function App() {
 

  return (
    <div>
      <Navbar/>
      {/*<Navbar/>
      <Homepage/>
      <Aboutpage/>
      <Skillspage/>
      <Projectpage/>
  <Contactpage/>*/}

      <section id="Home">
  <Homepage/>
</section>

<section id="Aboutpage">
<Aboutpage/>
</section>

<section id="Timelinepage">
<Timelinepage/>
<Bitcube/>
</section>

<section id="Project">
  <Projectpage/>
</section>

<section id="Contact">
  <Contactpage/>
</section>

<Footer/>
      {/*<Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/About" element={<Aboutpage/>}/>
        <Route path="/Skills" element={<Skillspage/>}/>
        <Route path="/Project" element={<Projectpage/>}/>
        <Route path="/Contact" element={<Contactpage/>}/>

      </Routes>*/}
    </div>
  )
}

export default App
