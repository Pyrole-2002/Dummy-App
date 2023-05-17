import { useState } from "react"
import axios from "axios"

const DeleteForm = () => {
	const [product, setProduct] = useState({
		id: "",
	})
	const handleChange = (e) => {
		// name is the field of the form
		const { name, value } = e.target
		setProduct({ ...product, [name]: value })
		console.log(`field: ${name}`, `product: ${product}`)
	}
	const handleSubmit = async (e) => {

		e.preventDefault()
		try {
			const rawData = await axios({
				method: "GET",
				url: "http://localhost:5000/products",
			})
			const products = rawData.data
			console.log(products, product.id)
			const foundProduct = products.find((obj) => obj.id == product.id);
			console.log(foundProduct)
			if (foundProduct) {
				const mongoId = foundProduct._id
				await axios({
					method: "DELETE",
					url: `http://localhost:5000/products/${mongoId}`,
				})
			} else {
				console.log("Product not found")
			}
			setProduct({
				id: "",
			})
		} catch (error) {
			console.log(error)
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
                id:
                <input
                    type="text"
                    name="id"
                    value={product.id}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default DeleteForm
