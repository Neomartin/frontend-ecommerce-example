import { Route, Routes } from 'react-router';
import './App.css';
import Main from './Layout/Main/Main';
import Home from './Pages/Home/Home';
import AdminProduct from './Pages/AdminProduct/AdminProduct';
import Products from './Pages/Products/Products';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';

function App() {
  return (
    <>



      <Routes>

        <Route path="/login" element={<h1>Login</h1>} />


        <Route path="/" element={<Main />}>

          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin-products" element={<AdminProduct />} />
          <Route path="admin-users" element={<h1>Contact</h1>} />
          
        </Route>

        
      </Routes>

    </>
  );
}

export default App;
