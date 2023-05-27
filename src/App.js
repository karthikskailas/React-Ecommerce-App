import { Routes, Route } from "react-router-dom";
import HomePage from "./router/homepage/homepage.component";
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};

export default App;
