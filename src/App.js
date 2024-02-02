import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./Pages/Home/Home";
import FeaturedCollection from "./Pages/FeaturedCollection/FeaturedCollection";
import ProductCollection from "./Pages/ProductCollection/ProductCollection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/featuredcollection' element={<FeaturedCollection />} />
          <Route path='/productcollection' element={<ProductCollection />} />
        </Routes>

      </BrowserRouter>
    </div >
  );
}

export default App;
