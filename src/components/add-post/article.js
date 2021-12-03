import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../header/header';
import './article.css';

export default function PostArticle() {
	const [Nombateaux, setNombateaux] = useState('');
	const [type, setType] = useState('');
	const [opreationDeSauvetage, setOpreationDeSauvetage] = useState('');
	const [techniqueSauvetage, setTechniqueSauvetage] = useState('');
	const [image, setImage] = useState('');
	let location = useNavigate();
	function handleSubmit(e) {
		e.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:5000/article',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('token'),
			},
			data: {
				Nombateaux: Nombateaux,
				type: type,
				opreationDeSauvetage: opreationDeSauvetage,
				techniqueSauvetage: techniqueSauvetage,
				image: image,
			},
		}).then(
			(res) => {
				console.log(res);
				location('/home');
			},
			(error) => {
				console.log(error.response);
			}
		);
	}

	const getBase64 = (file) => {
		return new Promise((resolve) => {
			let fileInfo;
			let baseURL = '';
			// Make new FileReader
			let reader = new FileReader();

			// Convert the file to base64 text
			reader.readAsDataURL(file);

			// on reader load somthing...
			reader.onload = () => {
				// Make a fileInfo Object

				baseURL = reader.result;
				console.log(baseURL);
				resolve(baseURL);
			};
			console.log(fileInfo);
		});
	};

	const handleChange = (e) => {
		let file = e.target.files[0];
		getBase64(file)
			.then((result) => {
				file['base64'] = result;
				console.log('File Is', file);
				setImage(result);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Header />
			<div className="container-login">
				<div className="left-side">
					<div className="logo-auth mb-5">
						<span className="title">
							{' '}
							Add{' '}
							<span> Article</span>
						</span>
					</div>
					<div className="login-body">
						<input
							type="text"
							className="form-control"
							placeholder="Bateau Name"
							onChange={(e) =>
								setNombateaux(
									e.target
										.value
								)
							}
						/>
						<input
							type="text"
							className="form-control"
							placeholder="type de bateau"
							onChange={(e) =>
								setType(
									e.target
										.value
								)
							}
						/>
						<input
							type="text"
							className="form-control"
							placeholder="technique Sauvetage "
							onChange={(e) =>
								setTechniqueSauvetage(
									e.target
										.value
								)
							}
						/>
						<input
							type="text"
							className="form-control"
							placeholder="operation de sauvetage"
							onChange={(e) =>
								setOpreationDeSauvetage(
									e.target
										.value
								)
							}
						/>

						<input
							type="file"
							className="form-control"
							placeholder="image"
							onChange={(e) =>
								handleChange(e)
							}
						/>
						<button
							className="btn-primary"
							onClick={(e) =>
								handleSubmit(e)
							}
						>
							ADD
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
