import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import MyContext from "./MyContext";

const AllServices = () => {
	const { logUser, setLogUser } = useContext(MyContext);

	const [data, setData] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios({
					method: "GET",
					url: `http://localhost:5000/products/`,
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
	var headingsMap = {
		"ID": "id",
		"Title": "title",
		"Desc": "description",
		"Price": "price",
		"Discount": "discountPercentage",
		"Rating": "rating",
		"Stock": "stock",
		"Brand": "brand",
		"Category": "category",
		"Thumbnail": "thumbnail",
		"Image": "image",
		"Provider": "provider"
	};
	var headings = Object.keys(headingsMap);
	return (
        <table>
            <thead>
                <tr>
                    {headings.map((heading, index) => (
                        <th key={index}>{heading}</th>
                    ))}
                    <th>Sub</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className="all-services-content">
                        {headings.map((heading, index) => (
                            <td key={index}>{row[headingsMap[heading]]}</td>
                        ))}
                        <td>
                            <input
                                type="checkbox"
                                style={{
                                    width: "1.5rem",
                                    height: "1.5rem",
								}}
								value={row.id}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default AllServices;
