import React from "react";
import "./App.css";
import { User } from "./interfaces/User";

/**
 * ! Tao ra object userInfor chua thong tin ca nhan (ten, tuoi, que quan, email, GPA, major, gender, hobbies, ... ) va in ra man hinh!
 */

const userInfor: User = {
	userName: "Nguyen Minh Hoang",
	age: 18,
	email: "hoangnm62@fe.edu.vn",
	GPA: 3.5,
	address: "Bắc Giang",
	major: "Software Engineering",
	password: "123456789",
	gender: "Male",
};

// ! props = properties

type Props = { name: string; age: number };
const Hello = (props: Props) => {
	return (
		<h1>
			Hello {props.name} - {props.age} tuổi
		</h1>
	);
};

/**
 * Tạo nút bấm sử dụng useState để thay đổi theme của trang web.
 */

function App() {
	return (
		<>
			{/* {Component Hello} */}
			<Hello name={"Hoang"} age={18} />
			<Hello name={"Chung"} age={20} />

			{/* Hàm Hello */}
			{/* {Hello("Hoang")}  */}
		</>
	);
}

export default App;
