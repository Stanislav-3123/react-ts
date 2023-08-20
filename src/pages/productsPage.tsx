import React, { useContext } from "react";
import "../App.css";
import { Product } from "../components/products";
import { useProducts } from "../hooks/products";
import { Modal } from "../components/modal";
import { CreateProduct } from "../components/createProduct";
import { IProduct } from "../models";
import { ModalContext } from "../context/modalContext";

export function ProductPage() {
	const { products, error, loading, addProduct } = useProducts();
	const {modal, open, close} = useContext(ModalContext)
  
  const createHandler = (product: IProduct) => {
		  close()
		  addProduct(product)
	  }
  
	 return (
		<div className="App">
		  {loading && <p className="loading">Loading...</p>}
		  {error && <p className="error">{error}</p>}
		  {products.map((products) => (
			 <Product product={products} key={products.id} />
		  ))}
		  {modal && <Modal title="Creat new product" onClose={close}>
			  <CreateProduct onCreate={createHandler}/>
		  </Modal>}
		  <button className="add-product-button" onClick={open}>Add Product</button>
		</div>
	 );
}