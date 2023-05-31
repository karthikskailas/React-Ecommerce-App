import { Routes, Route } from "react-router-dom";
import HomePage from "./router/homepage/homepage.component";
import Navigation from "./router/navigation/navigation.component";
import Shop from "./router/shop/shop.component";
import SignIn from "./router/sign-in/sign-in.component";


const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path="/shop" element={<Shop/>} />
				<Route path="/Sign-In" element={<SignIn/>} />
			</Route>
		</Routes>
	);
};

export default App;
