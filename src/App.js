import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./pages/Home"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}