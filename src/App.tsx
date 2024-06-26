import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notfound from "./pages/Notfound";
import { useEffect, useState } from "react";
import instance from "./apis";

function App() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			const { data } = await instance.get("/products");
			setProducts(data);
		};

		fetchAPI();
	}, []);
	return (
		<>
			<Header />
			<main id="main" className="container">
				<Routes>
					<Route index element={<Home products={products} />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</main>

			<Footer />
		</>
	);
}

export default App;
