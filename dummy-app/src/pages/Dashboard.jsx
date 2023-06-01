import { useState } from "react"
import Navbar from "../components/Navbar"
import MyServices from "../components/MyServices"
import AllServices from "../components/AllServices"
import MySubscriptions from "../components/MySubscriptions"

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
			justifyContent: "space-between",
			alignItems: "space-between",
		}}>
			<Navbar tab={tab} setTab={setTab} />
			<div className="dash_content">
				{tab === "my_services" && <MyServices />}
				{tab === "all_services" && <AllServices />}
				{tab === "my_subscriptions" && <MySubscriptions />}
			</div>
		</div>
	)
}

export default Dashboard
