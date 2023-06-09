import SignInForm from "../../components/sign-in-form/signInForm.component";
import "../../utils/firebase/firebase.utils";
import {
	signInWithGooglePopups,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
	const googleAuth = async () => {
		const { user } = await signInWithGooglePopups();
		const userRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In</h1>
			<button onClick={googleAuth}>popUp</button>
			<SignInForm/>
		</div>
	);
};

export default SignIn;
