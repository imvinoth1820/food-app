import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Viewcart from './components/Viewcart';
import { useState,createContext } from 'react';

export const cartContext = createContext()

const alerting=()=>{
     alert("adkhv")
}

function App() {
  const[cart,setCart] = useState([])
  return (
  <cartContext.Provider value={{cart,setCart}}>
      
  <BrowserRouter>
     <Header cart={cart}/>
      <div className="container">
        <Routes>
          <Route path="/" element = {<Home  />} />
          <Route path="/Cart" element = {<Viewcart  />} />
          </Routes>
      </div>
      <h3 className='footer'><a href="https://github.com/imvinoth1820" target='blank'>Design by &copy;VinothKumar R 🚀</a></h3>
      </BrowserRouter>
 
    </cartContext.Provider>
  );
}

export default App;
