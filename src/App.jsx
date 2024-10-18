import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import {CartContextProvider} from "./context/cartContext"



function App() {
  return (
    <CartContextProvider>
    <div>
    <Router>
    <div className="w-full">
      <Navbar/>
      <hr className=" mt-2 h-[2px] bg-gray-300" />
    </div>
    </Router>
    <Hero></Hero>
    </div>
    </CartContextProvider>
  )
}

export default App
