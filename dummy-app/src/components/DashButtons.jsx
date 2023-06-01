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
                    tab === "all_services" ? "selected" : ""
                }`}
                onClick={() => setTab("all_services")}
            >
                All Services
            </button>
            <button
                className={`dash_button ${
                    tab === "my_subscriptions" ? "selected" : ""
                }`}
                onClick={() => setTab("my_subscriptions")}
            >
                My Subscriptions
            </button>
        </div>
    );
}

export default DashButtons
