import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { URL } from "../../config/env.config";	

export default function TempProduct() {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {

        getProducts()

    }, [])

    async function getProducts() {
        try {
            
            const response = await axios.get(`${URL}/products`);

            const productos = response.data.products;

            setProducts(productos);


        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="temp-product-container">
      
        {
            products.map((product) => {

                return (
                  <div className="temp-product-card" key={product._id}>
                    <img
                      src={`${import.meta.env.VITE_FILES_URL}/products/${product.image}`}
                      alt={product.name}
                    />

                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <button className="btn">Add to Cart</button>
                    <Link className="btn" to={`/product-detail/${product._id}`}>
                      View
                    </Link>
                  </div>
                );
            })
        }

    </div>
  );
}
