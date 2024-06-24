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

function App() {
	return (
		<>
			<h2>Name: {userInfor.userName}</h2>
			<p> Age: {userInfor.age}</p>
			<p> address: {userInfor.address}</p>
			<p> gender: {userInfor.gender}</p>
			<p> major: {userInfor.major}</p>
			<p> email: {userInfor.email}</p>
		</>
	);
}

export default App;
