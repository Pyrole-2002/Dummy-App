import { Link } from "react-router-dom";

const NotFound = () => {
	return (
        <div
            style={{
                transition: "all 0.6s ease-in-out",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1
                    style={{
                        fontFamily: "sans-serif",
                        color: "#666",
                        margin: "0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "6em",
                    }}
                >
                    Error 404
                </h1>
                <button
                    style={{
                        width: "110px",
                        backgroundColor: "#3700ff",
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "#fff",
                        }}
                    >
                        Go Back
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default NotFound
