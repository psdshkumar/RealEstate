
import './App.css';
import Home from './Components/Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Navbar/Nav';
import Footer from './Components/Navbar/Footer';
import About from './Components/Pages/About'
import Property from './Components/Pages/Property';
import OrderSummry from './Components/Pages/OrderSummry';
import Contact from './Components/Pages/Contact';
import Reply from './Components/Pages/Reply';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Property' element={<Property />}></Route>
        <Route path='/Shortlist' element={<OrderSummry />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/confrim' element={<Reply />}></Route>
        
        
      </Routes>
   
      
    </div>
  );
}

export default App;
