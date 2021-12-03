import loginImg from '../../assets/img/image.png';
import { Link } from 'react-router-dom';
import './login.css';

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let location = useNavigate();
	function handleSubmit(e) {
		e.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:5000/user/login',
			headers: { 'Content-Type': 'application/json' },
			data: {
				email: email,
				password: password,
			},
		}).then(
			(res) => {
				console.log(res);
				localStorage.setItem('token', res.data.token);
				location('/home');
			},
			(error) => {
				console.log(error.response);
			}
		);
	}

	return (
		<div className="container-login">
			<div className="left-side">
				<div className="logo-auth">
					<span className="title">
						{' '}
						Sauve<span>tage</span>
					</span>
					<p>Log in to add articles</p>
				</div>
				<div className="login-body">
					<span className="title-log">Login</span>
					<input
						type="text"
						className="form-control"
						placeholder="Email"
						onChange={(e) =>
							setEmail(e.target.value)
						}
					/>
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						onChange={(e) =>
							setPassword(
								e.target.value
							)
						}
					/>
					<button
						className="btn-primary"
						onClick={(e) => handleSubmit(e)}
					>
						{' '}
						Se connecter
					</button>
					<p className="inscription">
						Nouveau sur sauvetage ?
						<Link to="/register">
							<span className="inscrit ml-2">
								{' '}
								S’inscrire
							</span>
						</Link>
					</p>
				</div>
			</div>
			<div className="right-side">
				<div className="img">
					<img
						src={loginImg}
						alt="login"
						height="500"
						width="500"
					></img>
				</div>
			</div>
		</div>
	);
}
