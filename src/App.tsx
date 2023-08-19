import React, { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./components/products";
import axios, { AxiosError } from "axios";
import { IProduct } from "./models";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=7"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

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
