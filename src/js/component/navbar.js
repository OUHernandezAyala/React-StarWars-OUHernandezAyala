import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const deleteFavorite = (uid, name, type) => {
		const delFavorite = {
			uid: uid,
			name: name,
			type: type
		};
		actions.deleteFav(delFavorite);
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					className="imagen-logo"
					src="https://th.bing.com/th/id/R.9d78e1dca54a95cf569d8589565df082?rik=iagJ2%2fi%2fwGtKTQ&pid=ImgRaw&r=0"
					alt="Logo"
					style={{ maxWidth: "150px", maxHeight: "50px" }} 
				/>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
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
								<i
										className="btn fas fa-trash"
										onClick={() => deleteFavorite(item.uid, item.name, item.type)}
										style={{ color: 'gray', marginLeft: '5px', cursor: 'pointer' }}
								></i>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
