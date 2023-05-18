import { useParams } from "react-router-dom"

const Dashboard = () => {
	const { id } = useParams()
	return (
		<h1>Dashboard {id}</h1>
	)
}

export default Dashboard
