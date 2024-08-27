// src/components/Home.js
import React from 'react';
import { categories } from './data/products';
import './Home.css';

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>Product App</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div id="home">
        <h1>Product Categories</h1>
        {categories.map((category) => (
          <div key={category.id}>
            <h2>{category.name}</h2>
            <div className="products">
              {category.products.map((product) => (
                <div className="card" key={product.id}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
