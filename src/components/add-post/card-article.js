import loginImg from '../../assets/img/art.jpg';
import './article.css';
export default function Article(props) {
	return (
		<div class="card mb-4">
			<img
				class="card-img-top"
				src={props.article.image}
				alt="Card image cap"
				width="280"
				height="350"
			/>

			<div class="card-body">
				<div className="card-title">
					<span>{props.article.Nombateaux}</span>
				</div>
				<blockquote class="blockquote mb-0">
					<p>
						technique :
						{
							props.article
								.techniqueSauvetage
						}
					</p>
					<footer class="blockquote-footer">
						Type de bateau{' '}
						<cite title="Source Title">
							{props.article.type}
						</cite>
					</footer>
				</blockquote>
			</div>
		</div>
	);
}
