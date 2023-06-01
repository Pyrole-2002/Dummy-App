import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import MyContext from "../components/MyContext"
import DashButtons from "./DashButtons"
import logo from "../assets/logo.png"

const Navbar = ({ tab, setTab }) => {
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
            <img
                src={logo}
                alt="logo"
                style={{
                    width: "80%",
                    position: "relative",
                    top: "10px",
                    margin: "10px auto",
                }}
            />
            <div className="dash_title">
                {logUser.result.username}'s Dashboard
            </div>
            <DashButtons tab={tab} setTab={setTab} />
            <div style={{
                height: "500px",
            }} />
            <button
                onClick={handleLogout}
                style={{
                    backgroundColor: "#ff192d",
                    fontWeight: "500",
                    fontSize: "1.7rem",
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Navbar
