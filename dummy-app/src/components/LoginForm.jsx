import { useState, useContext, Navigate } from "react"
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
				const token = response.data.token;
				const tokenVerified = await TokenVerification(token);
				console.log("Token Verified: ", tokenVerified);
				if (tokenVerified) {
					const username = response.data.result.username;
					return <Navigate to={`/dashboard/:${username}`} />;
				}
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
            }}
        >
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
			<button type="submit">Login</button>
        </form>
    );
}

export default LoginForm
