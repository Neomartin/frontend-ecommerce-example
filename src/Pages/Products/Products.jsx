import axios from 'axios';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import './Products.css';
import { useEffect, useState } from 'react';
import { URL } from '../../config/env.config';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    loadProducts();
  }, []);
  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`${URL}/products`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="products-page">
      <SectionTitle title="Products" subtitle="All products" />
      <section className="products-page__section">
        <Sidebar />
        <ProductsContainer products={products} />
      </section>
    </div>
  );
}
