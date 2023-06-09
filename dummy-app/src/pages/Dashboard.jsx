import { useState } from "react"
import Navbar from "../components/Navbar"
import MyServices from "../components/MyServices"
import AddService from "../components/AddService"

const Dashboard = () => {
	const [tab, setTab] = useState("my_services")
	return (
		<div style={{
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "space-between",
		}}>
			<Navbar tab={tab} setTab={setTab} />
			<div className="dash_content">
				{tab === "my_services" && <MyServices />}
				{tab === "add_service" && <AddService />}
			</div>
		</div>
	)
}

export default Dashboard
