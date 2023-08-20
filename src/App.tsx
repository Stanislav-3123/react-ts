import React from "react";
import "./App.css";
import { Product } from "./components/products";
import { useProducts } from "./hooks/products";

function App() {
  const { products, error, loading } = useProducts();

  return (
    <div className="App">
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {products.map((products) => (
        <Product product={products} key={products.id} />
      ))}
    </div>
  );
}

export default App;
