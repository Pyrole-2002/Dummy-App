import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import MyContext from "../components/MyContext"

const Navbar = () => {
    const navigate = useNavigate();
    const { logUser, setLogUser } = useContext(MyContext);
    const handleLogout = () => {
        console.log("Logout")
        setLogUser(null)
        navigate("/")
    }
    console.log(logUser)
    return (
        <div className="navbar">
            <label>User {logUser.result.username}</label>
            <ul>
                <li>
                    <button
                        onClick={handleLogout}
                        style={{
                            position: "absolute",
                            right: "10px",
                            top: "0px",
                            backgroundColor: "#ff192d",
                        }}
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Navbar
