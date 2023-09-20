import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

function Login() {
	const auth = getAuth(app);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState(second);

	const signUp = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				alert("Successfully Created");
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				// const errorMessage = error.message;
				alert(errorCode);
				// ..
			});
	};

	// const navigate = useNavigate();

	// const submithandler = (e) => {
	// 	e.preventDefault();
	// 	const username = e.target.username.value;
	// 	const password = e.target.password.value;
	// 	if (username === "user@example.com" && password === "1Password") {
	// 		navigate("/gallery/");
	// 	} else {
	// 		navigate("/galleryy/");
	// 	}
	// };

	return (
		<div className="form-div">
			<div className="form">
				<label htmlFor="username">Enter your username:</label>
				<input
					id="username"
					type="text"
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label htmlFor="password">Enter your password:</label>
				<input
					id="password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={signUp}></button>
				<button>Submit</button>
			</div>
		</div>
	);
}

export default Login;
