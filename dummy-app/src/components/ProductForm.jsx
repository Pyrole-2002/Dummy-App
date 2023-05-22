import { useState } from 'react';
import CreateDeleteBut from "./CreateDeleteBut";
import CreateForm from './CreateForm';
import ActionsForm from './ActionsForm';

const ProductForm = () => {
	const [create, setCreate] = useState(true);

	return (
        <div>
            <CreateDeleteBut handleButton={setCreate} selection={create} />
            {create ? <CreateForm /> : <ActionsForm />}
        </div>
    );
}

export default ProductForm
