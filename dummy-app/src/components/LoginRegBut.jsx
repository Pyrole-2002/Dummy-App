const LoginRegBut = ({ handleButton }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <button onClick={() => handleButton(true)}>
                Login
            </button>
            <button onClick={() => handleButton(false)}>
                Register
            </button>
        </div>
    );
};

export default LoginRegBut;
