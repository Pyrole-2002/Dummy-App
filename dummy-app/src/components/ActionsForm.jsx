import { useState } from "react"
import axios from "axios"
import { useContext } from "react";
import MyContext from "./MyContext";

const ActionsForm = () => {
	const [action, setAction] = useState("Delete")
    const { logUser, setLogUser } = useContext(MyContext);
	const [product, setProduct] = useState({
		id: "",
	})
	const handleChange = (e) => {
		// name is the field of the form
		const { name, value } = e.target
		setProduct({ ...product, [name]: value })
		console.log(`field: ${name}`, `product: ${product}`)
	}
	const handleAction = (e) => {
		setAction(e.target.value)
	}
	const handleDelete = async (e) => {
		console.log("delete")
		const rawData = await axios({
			method: "GET",
			url: `http://localhost:5000/products/${logUser.result.username}`,
		})
		const products = rawData.data
		console.log(products, product.id)
		const foundProduct = products.find((obj) => (obj.id === parseInt(product.id)) && (obj.provider === logUser.result.username));
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
	}
	const handleAdd = async (e) => {
		console.log("add")
		const rawData = await axios({
			method: "GET",
			url: `http://localhost:5000/products`,
		})
		const products = rawData.data
		console.log(products, product.id)
		const foundProduct = products.find((obj) => obj.id === parseInt(product.id));
		console.log(foundProduct)
		// Check if product exists and if user is not already subscribed
		if (foundProduct && !foundProduct.subscribers.includes(logUser.result.username)) {
			const mongoId = foundProduct._id
			await axios({
				method: "PATCH",
				url: `http://localhost:5000/products/${mongoId}`,
				data: {
					subscribers: [...foundProduct.subscribers, logUser.result.username]
				},
				Headers: {
					Accept: "application/json",
				},
			});
		} else {
			console.log("Product not found or user already subscribed")
		}
		setProduct({
			id: "",
		})
	}
	const handleRemove = async (e) => {
		console.log("remove")
		const rawData = await axios({
			method: "GET",
			url: `http://localhost:5000/products/${logUser.result.username}`,
		})
		const products = rawData.data
		console.log(products, product.id)
		const foundProduct = products.find((obj) => (obj.id === parseInt(product.id)) && obj.subscribers.includes(logUser.result.username));
		console.log(foundProduct)
		if (foundProduct) {
			const mongoId = foundProduct._id
			await axios({
				method: "PATCH",
				url: `http://localhost:5000/products/${mongoId}`,
				data: {
					subscribers: foundProduct.subscribers.filter((subscriber) => subscriber !== logUser.result.username)
				},
				Headers: {
					Accept: "application/json",
				},
			});
		} else {
			console.log("Product not found")
		}
		setProduct({
			id: "",
		})
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			if (action === "Delete") {
				handleDelete();
			}
			else if (action === "Add") {
				handleAdd();
			}
			else if (action === "Remove") {
				handleRemove();
			}
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
            <div>
                <button
                    value="Delete"
					type="button"
                    onClick={handleAction}
                    className={action === "Delete" ? "selected" : ""}
                >
                    Delete
                </button>
                <button
                    value="Add"
					type="button"
                    onClick={handleAction}
                    className={action === "Add" ? "selected" : ""}
                >
                    Add
                </button>
                <button
                    value="Remove"
					type="button"
                    onClick={handleAction}
                    className={action === "Remove" ? "selected" : ""}
                >
                    Remove
                </button>
            </div>
            <button
                type="submit"
                style={{
                    background: "#009632",
                }}
            >
                Submit
            </button>
        </form>
    );
}

export default ActionsForm
