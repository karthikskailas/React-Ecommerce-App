import { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const userDefaultValues = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignInForm = () => {
	const [formFieldValue, setFormField] = useState(userDefaultValues);
	const { displayName, email, password, confirmPassword } = formFieldValue;
	console.log({ formFieldValue });
	const onChangeHandler = (event) => {
		const { name, value } = event.target;
		setFormField({ ...formFieldValue, [name]: value });
	};

	const resetValue = () => {
		setFormField(userDefaultValues);
		console.log(userDefaultValues);
		
	};
	const onSubmitHandler = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("password not match");
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { displayName });
			resetValue();
		} catch (err) {
			if (err.code === "auth/email-already-in-use") {
				alert("Cannot create User ,Email already in use");
			}
			console.log(`error: ${err.message}`);
		}
	};
	return (
		<div>
			<h1>Sign Up with your email and password</h1>
			<form onSubmit={onSubmitHandler}>
				<label htmlFor="">Display Name</label>
				<input
					type="text"
					name="displayName"
					required
					onChange={onChangeHandler}
					value={displayName}
				/>
				<label htmlFor="">Email</label>
				<input
					type="email"
					name="email"
					required
					onChange={onChangeHandler}
					value={email}
				/>
				<label htmlFor="">Password</label>
				<input
					type="password"
					name="password"
					required
					onChange={onChangeHandler}
					value={password}
				/>
				<label htmlFor="">Confirm Password</label>
				<input
					type="password"
					name="confirmPassword"
					required
					onChange={onChangeHandler}
					value={confirmPassword}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignInForm;
