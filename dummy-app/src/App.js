import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import Form from "./Form";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				// const res = await fetch('https://dummyjson.com/products');
				// const data = await res.json();
				const data = await axios({
					method: "GET",
					url: "http://localhost:5000/products",
				});
				setData(data);
				// console.log(data);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
		const interval = setInterval(fetchData, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="App">
			<Form />
			<Table data={data.data} />
		</div>
	)
}

export default App;
