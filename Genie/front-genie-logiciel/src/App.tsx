import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio/:id" element={<Portfolio/>} />
        <Route path="/" element ={<Home/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
