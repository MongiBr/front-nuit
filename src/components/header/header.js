import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
export default function Header() {
	const [search, setSearch] = useState('');
	const handleChange = (e) => {
		setSearch(e.target.value);
		localStorage.setItem('search', search);
	};
	return (
		<nav class="navbar navbar-light ">
			<div className="container-fluid">
				<Link class="navbar-brand h1" to="/home">
					<span className="title-brand">
						Sauve<span>tage</span>
					</span>
				</Link>
				<input
					className="form-control-search"
					type="search"
					placeholder="search article from here..."
					onChange={(e) => handleChange(e)}
				></input>
				<Link class="nav-link" to="/login">
					Logout
				</Link>
			</div>
		</nav>
	);
}
