import { useState } from 'react';
import Buttons from './Buttons';
import CreateForm from './CreateForm';
import DeleteForm from './DeleteForm';

const Form = () => {
	const [create, setCreate] = useState(true);

	return (
		<div>
			<Buttons handleButton={setCreate} />
			{create ? <CreateForm /> : <DeleteForm />}
		</div>
	)
}

export default Form
