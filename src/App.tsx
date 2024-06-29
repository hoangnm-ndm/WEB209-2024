import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Notfound from "./pages/Notfound";
import { Product } from "./interfaces/Product";
import { useEffect, useState } from "react";
import { instance } from "./api";
import ProductForm from "./components/ProductForm";

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const nav = useNavigate()
	const fetchProducts = async () => {
		const { data } = await instance.get(`/products`);
		setProducts(data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const handleRemove = async (id: any) => {
		if (confirm("Are you sure?")) {
			await instance.delete(`/products/${id}`);
			setProducts(products.filter((item) => item.id !== id));
		}
	};

	const onSubmitProduct = async(data: Product) => {
		const res = await instance.post(`/products`, data)
		setProducts([...products, res.data])
		nav('/admin')
	}
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/admin" element={<Dashboard products={products} onRemove={handleRemove} />} />
				<Route path="/admin/product-add" element={<ProductForm onSubmit={onSubmitProduct} />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</>
	);
}

export default App;
