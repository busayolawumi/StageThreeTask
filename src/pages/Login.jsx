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

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			signIn();
		}
	};

	return (
		<div className="form-div">
			<div className="form">
				<h1>LOGIN</h1>
				<input
					id="username"
					placeholder="Username:"
					type="text"
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					id="password"
					placeholder="Password:"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					onKeyDown={handleKeyPress}
				/>
				<button onClick={signIn}>Submit</button>
			</div>
		</div>
	);
}

export default Login;
