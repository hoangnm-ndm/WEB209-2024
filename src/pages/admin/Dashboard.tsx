import { useEffect, useState } from "react";
import { instance } from "../../api";
import { Product } from "../../interfaces/Product";
import { Link } from "react-router-dom";

const Dashboard = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		(async () => {
			const { data } = await instance.get(`/products`);
			setProducts(data);
		})();
	}, []);

	const handleRemove = (id: any) => {
		console.log(id);
	};

	return (
		<div>
			<h1>Hello Admin</h1>
			<table className="table table-bodered table-striped text-center">
				<thead>
					<tr>
						<th>ID</th>
						<th>Tittle</th>
						<th>Price</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>{item.description}</td>
							<td>
								<Link to={`/product-edit/${item.id}`} className="btn btn-warning">
									Edit
								</Link>
								<button className="btn btn-danger" onClick={() => handleRemove(item.id)}>
									Remove
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
