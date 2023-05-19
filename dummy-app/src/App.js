import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
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
					path="*"
					element={
						<NotFound />
					}
				/>
			</Routes>
		</MyContext.Provider>
	)


	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	async function fetchData() {
	// 		try {
	// 			const data = await axios({
	// 				method: "GET",
	// 				url: "http://localhost:5000/products",
	// 			});
	// 			setData(data);
	// 			// console.log(data);
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	}
	// 	fetchData();
	// 	const interval = setInterval(fetchData, 1000);
	// 	return () => clearInterval(interval);
	// }, []);

	// return (
	// 	<div className="App">
	// 		<ProductForm />
	// 		<Table data={data.data} />
	// 	</div>
	// )
}

export default App;
