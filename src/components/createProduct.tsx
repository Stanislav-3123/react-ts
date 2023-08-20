import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";

const productData: IProduct = {
	title: '',
	price: 13.5,
	description: 'lorem ipsum set',
	image: 'https://i.pravatar.cc',
	category: 'electronic',
	rating: {
      rate: 3.9,
      count: 120,
    }
}
interface CreateProductProps {
	onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
	 setError('')
	 
	 if (value.trim().length === 0) {
		setError('Please enter product title.')
		return
	 }

	productData.title = value
	const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

	onCreate(response.data)
  };
  const changeHandler = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        className="input-modal"
        placeholder="Enter product title..."
        type="text"
        value={value}
        onChange={changeHandler}
      />
		{error && <p>{error}</p>}
      <button className="input-button" type="submit">
        Add
      </button>
    </form>
  );
}
