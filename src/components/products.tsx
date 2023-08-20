import "./products.css";
import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  return (
    <div className="products">
      <img src={product.image} alt={product.title} className="img-product" />
      <div className="product-info">
        <p className="product-title">{product.title}</p>
        <p className="product-price">{product.price}$</p>
      </div>
      <button
        onClick={() => setDetails((prev) => !prev)}
        className={details ? "hide-details-button" : "show-details-button"}
      >
        {details ? "Hide Details" : "Show Details"}
      </button>
      {details && (
        <div>
          <p className="product-description">{product.description}</p>
          <p className="rating">Rate: {product?.rating?.rate}</p>
        </div>
      )}
    </div>
  );
}
