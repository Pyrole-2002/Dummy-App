import { useState } from 'react';
import CreateDeleteBut from "./CreateDeleteBut";
import CreateForm from './CreateForm';
import DeleteForm from './DeleteForm';

const ProductForm = () => {
	const [create, setCreate] = useState(true);

	return (
        <div>
            <CreateDeleteBut handleButton={setCreate} />
            {create ? <CreateForm /> : <DeleteForm />}
        </div>
    );
}

export default ProductForm
