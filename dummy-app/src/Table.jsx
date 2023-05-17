const Table = ({ data }) => {
	// console.log(data);
	let headings = [];
	if (data) {
		headings = Object.keys(data[0]);
		// consosle.log(headings);
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
