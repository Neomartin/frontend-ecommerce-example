import { Route, Routes } from 'react-router';
import './App.css';
import Main from './Layout/Main/Main';
import Home from './Pages/Home/Home';
import AdminProduct from './Pages/AdminProduct/AdminProduct';
import Products from './Pages/Products/Products';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import AdminGuard from './services/guard/AdminGuard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />


          <Route path="admin-products" element={<AdminGuard>
                                                      <AdminProduct />  
                                                </AdminGuard>} />



          <Route path="admin-users" element={<AdminGuard>
                                                <h1>USER ADMIN</h1>
                                              </AdminGuard>
                                              } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
