import { useState } from 'react';
import CreateDeleteBut from "./components/CreateDeleteBut";
import CreateForm from './components/CreateForm';
import DeleteForm from './components/DeleteForm';

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
