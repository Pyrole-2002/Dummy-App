import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import MyContext from "../components/MyContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ImageBut from "../components/ImageBut";
import ThumbnailBut from "../components/ThumbnailBut";

const Product = () => {
    const { id } = useParams();
    const { logUser } = useContext(MyContext);
    const navigate = useNavigate();
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

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const rawData = await axios({
                    method: "GET",
                    url: `http://localhost:5000/products/${logUser.result.username}`,
                })
                const products = rawData.data;
                console.log(products);
                const foundProduct = products.find((product) => product._id === id);
                if (foundProduct) {
                    console.log(`found: ${foundProduct}`)
                    setProduct(foundProduct);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Update");
        await axios({
            method: "PATCH",
            url: `http://localhost:5000/products/${id}`,
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
        navigate(`/dashboard/${logUser.result.username}`)
    }

    const handleChange = (e) => {
        // name is the field of the form
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
        console.log(`field: ${name}`, `product: ${product}`);
    }

    return (
        <div>
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
                        backgroundColor: "#07051A",
                        boxShadow: "20px 20px 30px 7px #000000",
                        position: "relative",
                        width: "50%",
                        height: "80vh",
                        top: "8vh",
                        borderRadius: "20px",
                    }}
                >
                    <nav
                        style={{
                            backgroundColor: "#0E0F24",
                            height: "8vh",
                            borderTopLeftRadius: "inherit",
                            borderTopRightRadius: "inherit",
                            display: "flex",
                        }}
                    >
                        <button
                            onClick={() => {
                                navigate(`/dashboard/${logUser.result.username}`);
                            }}
                            style={{
                                backgroundColor: "#FF2934",
                                float: "left",
                                margin: "0",
                                borderRadius: "0",
                                borderTopLeftRadius: "inherit",
                                height: "100%",
                                width: "20%",
                                fontSize: "2rem",
                            }}
                        >
                            Back
                        </button>
                        <div style={{
                            flexBasis: "60%",
                            fontSize: "2rem",
                            fontWeight: "600",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            ID #{product.id}
                        </div>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: "#00BA32",
                                float: "right",
                                margin: "0",
                                borderRadius: "0",
                                borderTopRightRadius: "inherit",
                                height: "100%",
                                width: "20%",
                                fontSize: "2rem",
                            }}
                        >
                            Update
                        </button>
                    </nav>
                    <div style={{
                        height: "72vh",
                        display: "grid",
                        gridTemplateColumns: "repeat(8, 1fr)",
                        columnGap: "10px",
                        padding: "20px",
                        justifyItems: "stretch",
                        justifyContent: "space-evenly",
                        alignContent: "space-evenly",
                    }}>
                        <label style={{
                            gridColumn: "3/7",
                            alignSelf: "center",
                        }}>
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
                        <label style={{
                            gridColumn: "1/9",
                        }}>
                            <input
                                className="general_inp"
                                type="text"
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Description"
                            />
                        </label>
                        <label style={{
                            gridColumn: "1/3",
                        }}>
                            <input
                                className="general_inp"
                                type="text"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Price"
                            />
                        </label>
                        <label style={{
                            gridColumn: "3/6",
                        }}>
                            <input
                                className="general_inp"
                                type="text"
                                name="discountPercentage"
                                value={product.discountPercentage}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Discount Percentage"
                            />
                        </label>
                        <label style={{
                            gridColumn: "6/7",
                        }}>
                            <input
                                className="general_inp"
                                type="text"
                                name="rating"
                                value={product.rating}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Rating"
                            />
                        </label>
                        <label style={{
                            gridColumn: "7/9",
                        }}>
                            <input
                                className="general_inp"
                                type="text"
                                name="stock"
                                value={product.stock}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Stock"
                            />
                        </label>
                        <label style={{
                            gridColumn: "1/5",
                        }}>
                            <input
                                className="general_inp"
                                type="text"
                                name="brand"
                                value={product.brand}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Brand"
                                required
                            />
                        </label>
                        <label style={{
                            gridColumn: "5/9",
                        }}>
                            <input
                                className="general_inp"
                                type="text"
                                name="category"
                                value={product.category}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Category"
                                required
                            />
                        </label>
                        <label style={{
                            gridColumn: "1/5",
                        }}>
                            <ImageBut product={product} setProduct={setProduct} />
                        </label>
                        <label style={{
                            gridColumn: "5/9",
                        }}>
                            <ThumbnailBut product={product} setProduct={setProduct} />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Product;
