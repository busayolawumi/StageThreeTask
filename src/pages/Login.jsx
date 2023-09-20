import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

function Login() {
	const auth = getAuth(app);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const signIn = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigate("/gallery/");
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				// const errorMessage = error.message;
				navigate("/error/");
			});
	};

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
				<button onClick={signIn}>Submit</button>
			</div>
		</div>
	);
}

export default Login;
