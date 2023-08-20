import React from "react";
import {Link} from 'react-router-dom'

export function Navigation() {
	return (
		<nav className="navPage">
			<span className="storeName">Simple Marketplace:</span>
			<span className="links">
				<Link to="/">Products </Link>
				<Link to="/about">About</Link>
			</span>
		</nav>
	)
}