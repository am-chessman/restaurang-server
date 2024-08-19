import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "../pages/home"
import Menu from "../pages/menu"
import Booking from "../pages/booking"
import Contact from "../pages/contact"

export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />          
        </Routes>
      </Router>
    )
}