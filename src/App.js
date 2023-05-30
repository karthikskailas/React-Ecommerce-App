import { Routes, Route } from "react-router-dom";
import HomePage from "./router/homepage/homepage.component";
import Navigation from "./router/navigation/navigation.component";
import Shop from "./router/shop/shop.component";


const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path="/shop" element={<Shop/>} />
			</Route>
		</Routes>
	);
};

export default App;
