import { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch('https://dummyjson.com/products');
				const data = await res.json();
				setData(data);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, []);
	console.log(data);

	return (
		<div className="App">
			<Form />
			<Table data={data.products} />
		</div>
	)
}

export default App;
