import { useState } from "react"
import Navbar from "../components/Navbar"
import ProductForm from "../components/ProductForm"
import Table from "../components/Table"

const Dashboard = () => {
	// const possibleTabs = [
	// 	"my_services",
	// 	"all_services",
	// 	"my_subscriptions",
	// 	"logout"
	// ]
	const [tab, setTab] = useState("my_services")
	return (
		<div style={{
			display: "flex",
			flexDirection: "row",
		}}>
			<Navbar tab={tab} setTab={setTab} />
			<div className="dash_content"></div>
		</div>
	)
}

export default Dashboard
