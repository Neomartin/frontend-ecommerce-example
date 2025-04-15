import { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductsContainer.css';
import ProductCard from '../ProductCard/ProductCard';

const URL = import.meta.env.VITE_API_URL;

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`${URL}/products`);
      // setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
}
