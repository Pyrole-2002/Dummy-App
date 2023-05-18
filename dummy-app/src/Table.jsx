const Table = ({ data }) => {
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
