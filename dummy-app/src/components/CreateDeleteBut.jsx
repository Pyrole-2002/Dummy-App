const CreateDeleteBut = ({ handleButton, selection }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <button
                className={selection ? "selected" : ""}
                onClick={() => handleButton(true)}
                style={{
                    background: "#4400ff",
                }}
            >
                Create
            </button>
            <button
                className={selection ? "" : "selected"}
                onClick={() => handleButton(false)}
                style={{
                    background: "#4400ff",
                }}
            >
                Actions
            </button>
        </div>
    );
};

export default CreateDeleteBut;
