import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import MyContext from "./MyContext";

const UpdateService = () => {
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
        images: [],
    });
    const handleIdChange = async (e) => {
        const { value } = e.target;
        setProduct({ ...product, id: value });
        console.log(`id: ${product.id}`);
        try {
            const rawData = await axios({
                method: "GET",
                url: `http://localhost:5000/products/${logUser.result.username}`,
            });
            const products = rawData.data;
            const foundProduct = products.find((obj) => obj.id === parseInt(product.id) && obj.provider === logUser.result.username);
            console.log(`found: ${foundProduct}`);

            if (foundProduct) {
                setProduct({
                    id: foundProduct.id,
                    title: foundProduct.title,
                    description: foundProduct.description,
                    price: foundProduct.price,
                    discountPercentage: foundProduct.discountPercentage,
                    rating: foundProduct.rating,
                    stock: foundProduct.stock,
                    brand: foundProduct.brand,
                    category: foundProduct.category,
                    thumbnail: foundProduct.thumbnail,
                    images: foundProduct.images,
                });
            } else {
                console.log("Product not found");
                setProduct({
                    id: value,
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
            }
        } catch (err) {
            console.log("Error Creating Product: ", err);
        }
    }
    const handleChange = (e) => {
        // name is the field of the form
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
        console.log(`field: ${name}`, `product: ${product}`);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const rawData = await axios({
                method: "GET",
                url: `http://localhost:5000/products/${logUser.result.username}`,
            });
            const products = rawData.data;
            const foundProduct = products.find((obj) => obj.id === parseInt(product.id) && obj.provider === logUser.result.username);
            console.log(foundProduct);

            if (foundProduct) {
                const mongoId = foundProduct._id;
                await axios({
                    method: "PATCH",
                    url: `http://localhost:5000/products/${mongoId}`,
                    data: {
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
                    },
                    Headers: {
                        Accept: "application/json",
                    },
                })
            } else {
                console.log("Product not found");
            }

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
                    position: "relative",
                    width: "50%",
                    height: "80vh",
                    top: "50px",
                    border: "2px solid #ffffff",
                    borderRadius: "10px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    // display: "grid",
                    // gridTemplateColumns: "repeat(6, 1fr)",
                    // columnGap: "10px",
                    // justifyItems: "stretch",
                    // justifyContent: "space-evenly",
                    // alignContent: "space-evenly",
                }}
            >
                <label
                    style={{
                        gridColumnStart: "3",
                        gridColumnEnd: "5",
                        justifySelf: "center",
                    }}
                >
                    <input
                        className="general_inp"
                        type="text"
                        name="id"
                        value={product.id}
                        onChange={handleIdChange}
                        autoComplete="off"
                        placeholder="Unique ID"
                        required
                    />
                </label>
                <div style={{
                    display: "grid",
                    columnGap: "10px",
                    rowGap: "10px",
                }}>
                    {

                    }
                    <label
                        style={{
                            gridColumnStart: "1",
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
                    <label
                        style={{
                            gridColumnStart: "4",
                            gridColumnEnd: "7",
                        }}
                    >
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
                </div>
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

export default UpdateService;
