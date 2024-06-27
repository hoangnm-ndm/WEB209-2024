import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Notfound from "./pages/Notfound";

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/admin" element={<Dashboard />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</>
	);
}

export default App;
