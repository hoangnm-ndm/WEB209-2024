import { useEffect, useState } from "react";
import "./App.css";

interface User {
	userName: string;
	age: number;
	major: string;
	position: string;
	isMarried: true;
	GPA: number;
	email: string;
	address: string;
	skills: string[];
}

const user: User = {
	userName: "Nguyễn Minh Hoàng",
	age: 18,
	major: "Frontend Developer",
	position: "Code dạo",
	isMarried: true,
	GPA: 3.6,
	email: "hoangnm62@fe.edu.vn",
	address: "Bắc Giang, Việt Nam",
	skills: ["HTML CSS", "JS", "ReactJS", "NodeJS", "MongoDB"],
};

/**
 * ! 1. Khai báo kiểu dữ liệu cho data.
 * ! 2. In data ra màn hình.
 */

// ! Props = propeties

interface Props {
	name: string;
	age: number;
}

const Hello = (props: Props) => {
	return (
		<h2>
			Hello ban {props.name}, {props.age} tuoi
		</h2>
	);
};

/** state = trang thai cua du lieu */

function App() {
	const [isDark, setIsDark] = useState(false);
	useEffect(() => {
		// code logic
	}, [isDark]);
	const handleSetTheme = () => {
		console.log(1);
		setIsDark(!isDark);
	};
	return (
		<>
			<button onClick={handleSetTheme}>Set Theme</button>
			<h1>Hello</h1>
			<p>name: {user.userName}</p>
			<p>age: {user.age}</p>
			<p>major: {user.major}</p>
			<p>address: {user.address}</p>
			<p>email: {user.email}</p>
			<p>isMarried: {user.isMarried}</p>
			<p>position: {user.position}</p>

			<Hello name="Dat" age={18} />
			<Hello name="Dung" age={20} />
			<Hello name="Chuc" age={21} />
			<Hello name="Minh" age={22} />
		</>
	);
}

export default App;
