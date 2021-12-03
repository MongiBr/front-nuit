import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostArticle from '../components/add-post/article';
import Article from '../components/add-post/card-article';
import Header from '../components/header/header';

export default function Home() {
	const [card, setCard] = useState([]);

	let search = localStorage.getItem('search');
	useEffect(async () => {
		axios.get('http://localhost:5000/article/all', {
			headers: {
				'Content-Type': 'multipart/form-data;',
				Authorization: localStorage.getItem('token'),
			},
		})

			.then((res) => {
				console.log(res.data);
				const data = res.data.reverse();
				setCard(data);
			})
			.catch((err) => err.message);
	}, []);
	return (
		<div>
			<Header />

			<div className="cards">
				<div className="card mb-4 add">
					<div className="fluid">
						<span>
							{' '}
							{card.length} articles
						</span>
						<Link to="/add-article">
							<button className="btn btn-outline-primary rounded">
								Add article
							</button>
						</Link>
					</div>
				</div>

				{card.map((article) => (
					<Article article={article} />
				))}
			</div>
		</div>
	);
}
