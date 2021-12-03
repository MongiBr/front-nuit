import logo from './logo.svg';
import './App.css';
import Login from './components/authentification/login';
import Register from './components/register/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './page/home';
import PostArticle from './components/add-post/article';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path="/login"
					element={<Login />}
				/>
				<Route exact path="/home" element={<Home />} />

				<Route
					exact
					path="/register"
					element={<Register />}
				/>
				<Route
					exact
					path="/add-article"
					element={<PostArticle />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
