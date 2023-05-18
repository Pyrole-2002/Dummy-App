import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(`field: ${name}`, `user: ${user}`);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user.password !== user.confirmPassword) {
            alert("Passwords Don't Match!");
            return;
        }
        try {
            await axios({
                method: "POST",
                url: "http://localhost:5000/users",
                data: {
                    username: user.username,
                    password: user.password,
                },
                Headers: {
                    Accept: "application/json",
                },
            });
            console.log(user);

            setUser({
                username: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.log("Error Creating User: ", error);
        }
    };
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
            <label>
                Confirm Password:
                <input
                    type="password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
