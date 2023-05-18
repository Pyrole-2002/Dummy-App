import { useState } from 'react';
import Buttons from './components/Buttons';
import CreateForm from './CreateForm';
import DeleteForm from './DeleteForm';

const ProductForm = () => {
	const [create, setCreate] = useState(true);

	return (
		<div>
			<Buttons handleButton={setCreate} />
			{create ? <CreateForm /> : <DeleteForm />}
		</div>
	)
}

export default ProductForm
