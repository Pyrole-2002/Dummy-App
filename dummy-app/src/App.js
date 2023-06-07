import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import MyContext from "./components/MyContext";

function App() {
	const [logUser, setLogUser] = useState();
	return (
		<MyContext.Provider value={{ logUser, setLogUser }}>
			<Routes>
				<Route
					path="/dashboard/:id"
					element={
						<Dashboard />
					}
				/>
				<Route
					path="/"
					element={
						<LoginRegister />
					}
				/>
				<Route
					path="/product/:id"
					element={
						<Product />
					}
				/>
				<Route
					path="*"
					element={
						<NotFound />
					}
				/>
			</Routes>
		</MyContext.Provider>
	)
}

export default App;
