const DashButtons = ({ tab, setTab }) => {
	return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <button
                className={`dash_button ${
                    tab === "my_services" ? "selected" : ""
                }`}
                onClick={() => setTab("my_services")}
            >
                My Services
            </button>
            <button
                className={`dash_button ${
                    tab === "add_service" ? "selected" : ""
                }`}
                onClick={() => setTab("add_service")}
            >
                Add Service
            </button>
            <button
                className={`dash_button ${
                    tab === "update_service" ? "selected" : ""
                }`}
                onClick={() => setTab("update_service")}
            >
                Update Service
            </button>
        </div>
    );
}

export default DashButtons
