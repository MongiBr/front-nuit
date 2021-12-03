import loginImg from '../../assets/img/image.png';
import { Link, useNavigate } from 'react-router-dom';

import './register.css';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [age, setAge] = useState('');
	let location = useNavigate();
	function handleSubmit(e) {
		e.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:5000/user',
			headers: { 'Content-Type': 'application/json' },
			data: {
				name: name,
				email: email,
				password: password,
				age: age,
			},
		}).then(
			(res) => {
				console.log(res);
				location('/login');
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
				</div>
				<div className="login-body">
					<span className="title-log mt-3">
						Sign up
					</span>
					<input
						type="text"
						className="form-control"
						placeholder="Full name"
						onChange={(e) =>
							setName(e.target.value)
						}
					/>
					<input
						type="text"
						className="form-control"
						placeholder="Age"
						onChange={(e) =>
							setAge(e.target.value)
						}
					/>
					<input
						type="email"
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
						Create
					</button>
					<p className="inscription">
						already have an account ?
						<Link to="/login">
							<span className="inscrit ml-2">
								{' '}
								Login
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
