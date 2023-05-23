const DashButtons = ({ tab, setTab }) => {
	return (
		<div>
			<button
				className={`dash_button ${tab === "my_services" ? "selected" : ""}`}
				onClick={() => setTab("my_services")}
			>
				My Services
			</button>
			<button
				className={`dash_button ${tab === "all_services" ? "selected" : ""}`}
				onClick={() => setTab("all_services")}
			>
				All Services
			</button>
		</div>
	)
}

export default DashButtons
