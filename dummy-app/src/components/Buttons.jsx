const Buttons = ({ handleButton }) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <button
                onClick={() => handleButton(true)} autoFocus
            >
                Create
            </button>
            <button
                onClick={() => handleButton(false)}
            >
                Delete
            </button>
        </div>
    )
}

export default Buttons
