import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import MyContext from "./MyContext"

const TokenVerification = async (token) => {
	if (!token) {
		return false
	};
	try {
		const response = await axios({
			method: "POST",
			url: "http://localhost:5000/users/verify",
			data: {
				token: token,
			},
			Headers: {
				Accept: "application/json",
			},
		});
		console.log("Response: ", response.data);
		return response.data;
	} catch (error) {
		console.log("Error While Verifying Token: ", error);
	}
}

const LoginForm = () => {
	const navigate = useNavigate();
	const { logUser, setLogUser } = useContext(MyContext);
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
		console.log(`field: ${name}`,`user: ${user}`);
	}
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios({
				method: "POST",
				url: "http://localhost:5000/users/login",
				data: {
					username: user.username,
					password: user.password,
				},
				Headers: {
					Accept: "application/json",
				},
			});
			console.log("Response: ", response.data);
			console.log("User: ", user);
			setLogUser(response.data);

			setUser({
				username: "",
				password: "",
			});
			if (response.data) {
				console.log("Username: ", response.data.result.username);
				navigate(`/dashboard/${response.data.result.username}`, {
                    replace: true,
                });
			}
		} catch (error) {
			console.log("Error While Login: ", error);
		}
	}
	return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
				alignItems: "center",
				position: "relative",
				top: "30px",
            }}
        >
            <label>
                <input
                    className="login_reg"
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
					autoComplete="off"
                />
            </label>
            <br />
            <label>
                <input
                    className="login_reg"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
					autoComplete="off"
                />
            </label>
            <br />
            <button
                type="submit"
                style={{
                    width: "200px",
                    margin: "0",
					fontSize: "2rem",
					position: "relative",
					top: "30px",
				}}
            >
                Login
            </button>
        </form>
    );
}

export default LoginForm
