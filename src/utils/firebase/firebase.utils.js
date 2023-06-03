import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyBeWyrQ61T0YTu_r8H_YMr5Reqw7kDBonc",
	authDomain: "ecommerce-tutorial-db.firebaseapp.com",
	projectId: "ecommerce-tutorial-db",
	storageBucket: "ecommerce-tutorial-db.appspot.com",
	messagingSenderId: "556946000668",
	appId: "1:556946000668:web:75529fc79313405b4c48d9",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters = {
	prompt: "select_account",
};

export const auth = getAuth();
export const signInWithGooglePopups = () => signInWithPopup(auth, provider);

export const db = getFirestore(); // database instance

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalFields = {}
) => {
	if (!userAuth) return;
	const userDocRef = await doc(db, "users", userAuth.uid); // instance  of a document model doc(database,collection,Identifier);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalFields,
			});
		} catch (err) {
	
			console.log(`There is an error: ${err.message}`);
		}
	}

	return userDocRef;

	//if user doesn't exist
	//if user does exist

	//userSnapshot allow as to access data
	//userSnapshot.exists() method allow us to check whether or not there is and instance of it that exists inside of our database
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};
