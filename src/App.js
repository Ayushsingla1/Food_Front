import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Home from './Pages/Home';
import HomePage from './Pages/Homepage';
import Contact from './Pages/Contact';
import './App.css';
import Order from './Pages/Order';
import Review from './Pages/Review';
import Cart from './Pages/Cart'
import About from './Pages/About';
import NotFound from './Pages/Notfound';

function App() {
  return (
    <div>
      <Routes>
      <Route path = '/' element={<HomePage/>}>
        <Route index element = {<Home/>} />
        <Route path = '/Login' element = {<Login/>} />
        <Route path = '/Signup' element = {<SignUp/>} />
        <Route path = '/Order' element = {<Order/>} />
        <Route path = '/Contact' element = {<Contact/>} />
        <Route path = '/Review' element = {<Review/>} />
        <Route path = '/Cart' element = {<Cart/>} />
        <Route path = '/About' element = {<About/>} />
        <Route path = "*" element = {<NotFound/>} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
