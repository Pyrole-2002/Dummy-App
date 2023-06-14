import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import MyContext from "./MyContext";
import ImageBut from "./ImageBut";
import ThumbnailBut from "./ThumbnailBut";

const AddService = () => {
    const { logUser } = useContext(MyContext);
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
        images: "",
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
                    images: product.images,
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
                images: "",
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
                    background: "#151124",
                    boxShadow: "10px 10px 10px 5px #02000a",
                    position: "relative",
                    width: "50%",
                    height: "80vh",
                    top: "50px",
                    display: "grid",
                    borderRadius: "20px",
                    padding: "20px",
                    gridTemplateColumns: "repeat(6, 1fr)",
                    columnGap: "10px",
                    justifyItems: "stretch",
                    justifyContent: "space-evenly",
                    alignContent: "space-evenly",
                }}
            >
                <label
                    style={{
                        gridColumnStart: "1",
                        gridColumnEnd: "3",
                    }}
                >
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
                <label
                    style={{
                        gridColumnStart: "3",
                        gridColumnEnd: "7",
                    }}
                >
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
                <label
                    style={{
                        gridColumnStart: "1",
                        gridColumnEnd: "7",
                    }}
                >
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
                <label
                    style={{
                        gridColumnStart: "1",
                        gridColumnEnd: "2",
                    }}
                >
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
                <label
                    style={{
                        gridColumnStart: "2",
                        gridColumnEnd: "5",
                    }}
                >
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
                <label
                    style={{
                        gridColumnStart: "5",
                        gridColumnEnd: "6",
                    }}
                >
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
                <label
                    style={{
                        gridColumnStart: "6",
                        gridColumnEnd: "7",
                    }}
                >
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
                <label
                    style={{
                        gridColumnStart: "1",
                        gridColumnEnd: "4",
                    }}
                >
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
                <label
                    style={{
                        gridColumnStart: "4",
                        gridColumnEnd: "7",
                    }}
                >
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
                <label
                    style={{
                        gridColumnStart: "1",
                        gridColumnEnd: "4",
                    }}
                >
                    <ImageBut product={product} setProduct={setProduct} />
                </label>
                <label
                    style={{
                        gridColumnStart: "4",
                        gridColumnEnd: "7",
                    }}
                >
                    <ThumbnailBut product={product} setProduct={setProduct} />
                </label>
                <button
                    type="submit"
                    style={{
                        background: "#009632",
                        gridColumnStart: "1",
                        gridColumnEnd: "7",
                        width: "40%",
                        height: "50px",
                        justifySelf: "center",
                        fontSize: "20px",
                    }}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default AddService;
