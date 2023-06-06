const LoginRegBut = ({ selection, handleButton }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <button
                onClick={() => handleButton(true)}
                className={selection ? "selected" : ""}
                style={{
                    width: "300px",
                    margin: "0",
                    borderRadius: "0",
                    fontSize: "1.7rem",
                }}
            >
                Login
            </button>
            <button
                onClick={() => handleButton(false)}
                className={selection ? "" : "selected"}
                style={{
                    width: "300px",
                    margin: "0",
                    borderRadius: "0",
                    fontSize: "1.7rem",
                }}
            >
                Register
            </button>
        </div>
    );
};

export default LoginRegBut;
