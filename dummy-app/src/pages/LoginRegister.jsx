import { useState } from 'react'
import LoginRegBut from '../components/LoginRegBut'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import logo from '../assets/logo.png'

const LoginRegister = () => {
	const [login, setLogin] = useState(true);

	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
		}}>
			<window className="auth">
				<img src={logo} alt="logo" style={{
					width: '300px',
					position: 'relative',
					top: '10px',
					margin: '10px',
				}} />
				<LoginRegBut handleButton={setLogin} selection={login} />
				{login ? <LoginForm /> : <RegisterForm />}
			</window>
		</div>
	)
}

export default LoginRegister
