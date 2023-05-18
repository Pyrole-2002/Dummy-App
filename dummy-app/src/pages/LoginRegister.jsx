import { useState } from 'react'
import LoginRegBut from '../components/LoginRegBut'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const LoginRegister = () => {
	const [login, setLogin] = useState(true);

	return (
		<div>
			<LoginRegBut handleButton={setLogin} />
			{login ? <LoginForm /> : <RegisterForm />}
		</div>
	)
}

export default LoginRegister
