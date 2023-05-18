const CreateDeleteBut = ({ handleButton }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <button onClick={() => handleButton(true)}>
                Create
            </button>
            <button onClick={() => handleButton(false)}>
                Delete
            </button>
        </div>
    );
};

export default CreateDeleteBut;
