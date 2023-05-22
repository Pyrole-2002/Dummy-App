import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react"
import MyContext from "../components/MyContext"

const Dashboard = () => {
	const navigate = useNavigate();
	const { logUser, setLogUser } = useContext(MyContext);
	const { id } = useParams()
	const handleLogout = () => {
		console.log("Logout")
		setLogUser(null)
		navigate("/")
	}
	return (
		<div>
			<h1>Dashboard {id}</h1>
			<button onClick={handleLogout}>Logout</button>
		</div>
	)
}

export default Dashboard
