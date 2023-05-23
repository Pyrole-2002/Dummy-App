import { Link } from "react-router-dom";

const NotFound = () => {
	return (
        <div
            style={{
                transition: "all 0.6s ease-in-out",
                position: "relative",
                top: "50px",
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
                        fontSize: "8em",
                    }}
                >
                    Error 404
                </h1>
                <button
                    style={{
                        width: "200px",
                        height: "60px",
                        backgroundColor: "#ff2b2b",
                    }}
                    >
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "#fff",
                            fontSize: "2em",
                            fontFamily: "Arvo"
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
