import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const{store} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
			<div className="dropdown">
			<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{store.favorite?.map((item) => (
					<li key={item.name}>
					<Link
						to={`/${item.type}/${item.uid}`}
						style={{
							color: '#007bff',      
							textDecoration: 'none'  
						}}
					>
						{item.name}
					</Link>
				</li>
				
					
				))}
			</ul>
			</div>
			</div>
		</nav>
	);
};
