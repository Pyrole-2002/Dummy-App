import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import MyContext from "../components/MyContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

    let live_prod = {
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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                        display: "grid",
                        gridTemplateColumns: "repeat(6, 1fr)",
                        columnGap: "10px",
                        padding: "20px",
                        justifyItems: "stretch",
                        justifyContent: "space-evenly",
                        alignContent: "space-evenly",
                    }}>
                        <label style={{
                            gridColumn: "1/3",
                        }}>
                            <input
                                className="general_inp"
                                type="text"
                                name="title"
                                value={live_prod.id}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Title"
                                required
                            />
                        </label>
                        <label style={{
                            gridColumn: "3/5",
                        }}>
                            <input
                                className="general_inp"
                            />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Product;
