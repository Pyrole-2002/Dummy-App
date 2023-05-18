import { useState } from "react";
import axios from "axios";

const CreateForm = () => {
    const [product, setProduct] = useState({
        id: "",
        title: "",
        description: "",
        price: "",
        discountPercentage: "",
        rating: "",
        stock: "",
        brand: "",
        category: "",
        thumbnail: "",
        images: [],
    });
    const handleChange = (e) => {
        // name is the field of the form
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
        console.log(`field: ${name}`,`product: ${product}`);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios({
                method: "POST",
                url: "http://localhost:5000/products",
                data: {
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    discountPercentage: product.discountPercentage,
                    rating: product.rating,
                    stock: product.stock,
                    brand: product.brand,
                    category: product.category,
                    thumbnail: product.thumbnail,
                    images: product.images.split(","),
                },
                Headers: {
                    Accept: "application/json",
                },
            });
            console.log(product);
    
            setProduct({
                id: "",
                title: "",
                description: "",
                price: "",
                discountPercentage: "",
                rating: "",
                stock: "",
                brand: "",
                category: "",
                thumbnail: "",
                images: [],
            });
        } catch (err) {
            console.log("Error Creating Product: ", err);
        }
    }
    return (
        <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <label>
                id:
                <input
                    type="text"
                    name="id"
                    value={product.id}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                title:
                <input
                    type="text"
                    name="title"
                    value={product.title}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                description:
                <input
                    type="text"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                price:
                <input
                    type="text"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                discountPercentage:
                <input
                    type="text"
                    name="discountPercentage"
                    value={product.discountPercentage}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                rating:
                <input
                    type="text"
                    name="rating"
                    value={product.rating}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                stock:
                <input
                    type="text"
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                brand:
                <input
                    type="text"
                    name="brand"
                    value={product.brand}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                category:
                <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                thumbnail:
                <input
                    type="text"
                    name="thumbnail"
                    value={product.thumbnail}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                images:
                <input
                    type="text"
                    name="images"
                    value={product.images}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateForm
