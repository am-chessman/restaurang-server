import React from "react"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Menu from "../pages/menu"

export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
      </Router>
    )
}