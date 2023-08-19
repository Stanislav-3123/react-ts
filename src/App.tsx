import React from 'react';
import './App.css'
import { Product } from './components/products';
import { products } from './data/products';

function App() {
  return (
	<div className="App">
		<Product product={ products[0]}/>
		<Product product={ products[1]}/>
		<Product product={ products[2]}/>
	</div>
  )
}

export default App;
