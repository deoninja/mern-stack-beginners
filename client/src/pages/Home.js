import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Welcome to our store!</h2>
      <div>
        <h3>Our Products</h3>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
