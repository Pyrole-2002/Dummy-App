import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import MyContext from "./MyContext";

const Table = () => {
	const { logUser, setLogUser } = useContext(MyContext);

	const [data, setData] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios({
					method: "GET",
					url: `http://localhost:5000/products/${logUser.result.username}`,
				});
				setData(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
		const interval = setInterval(fetchData, 1000);
		return () => clearInterval(interval);
	}, []);
	// console.log(data);
	if (data === undefined || data.length === 0) {
		return (
			<h1 style={{textAlign: "center"}}>No Products</h1>
		)
	}
	let headings = [];
	if (data) {
		headings = Object.keys(data[0]);
	}
	else {
		return
	}
	return (
		<table>
			<thead>
				<tr>
					{headings.map(
						(heading, index) => <th key={index}>{heading}</th>
					)}
				</tr>
			</thead>
			<tbody>
				{data.map(
					(row, index) => (
						<tr key={index}>
							{headings.map(
								(heading, index) => <td key={index}>{row[heading]}</td>
							)}
						</tr>
					)
				)}
			</tbody>
		</table>
	)
}

export default Table
