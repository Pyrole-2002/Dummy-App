import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import MyContext from "./MyContext";

const AddService = () => {
    const { logUser, setLogUser } = useContext(MyContext);
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
        console.log(`field: ${name}`, `product: ${product}`);
    };
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
                    provider: logUser.result.username,
                    subscribers: [logUser.result.username],
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
    };
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
            <div
                style={{
                    background: "#290045",
                    position: "relative",
                    top: "50px",
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                }}
            >
                <label>
                    <input
                        className="general_inp"
                        type="text"
                        name="id"
                        value={product.id}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="Unique ID"
                        required
                    />
                </label>
                <br />
                <label>
                    <input
                        className="general_inp"
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="Title"
                        required
                    />
                </label>
                <br />
                <label>
                    <input
                        className="general_inp"
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        placeholder="Description"
                        autoComplete="off"
                    />
                </label>
                <br />
                <label>
                    <input
                        className="general_inp"
                        type="text"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="Price"
                        autoComplete="off"
                    />
                </label>
                <br />
                <label>
                    <input
                        className="general_inp"
                        type="text"
                        name="discountPercentage"
                        value={product.discountPercentage}
                        onChange={handleChange}
                        placeholder="Discount Percentage"
                        autoComplete="off"
                    />
                </label>
                <br />
                <label>
                    <input
                        className="general_inp"
                        type="text"
                        name="rating"
                        value={product.rating}
                        onChange={handleChange}
                        placeholder="Rating"
                        autoComplete="off"
                    />
                </label>
                <br />
                <label>
                    <input
                        className="general_inp"
                        type="text"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                        placeholder="Stock"
                        autoComplete="off"
                    />
                </label>
                <br />
                <label>
                    <input
                        className="general_inp"
                        type="text"
                        name="brand"
                        value={product.brand}
                        onChange={handleChange}
                        placeholder="Brand"
                        autoComplete="off"
                        required
                    />
                </label>
                <br />
                <label>
                    <input
                        className="general_inp"
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        placeholder="Category"
                        autoComplete="off"
                        required
                    />
                </label>
                <br />
                <label>
                    <input
                        className="general_inp"
                        type="text"
                        name="thumbnail"
                        value={product.thumbnail}
                        onChange={handleChange}
                        placeholder="Thumbnail"
                        autoComplete="off"
                    />
                </label>
                <br />
                <label>
                    <input
                        className="general_inp"
                        type="text"
                        name="images"
                        value={product.images}
                        onChange={handleChange}
                        placeholder="Images (comma separated)"
                        autoComplete="off"
                    />
                </label>
                <br />
                <button
                    type="submit"
                    style={{
                        background: "#009632",
                    }}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default AddService;
