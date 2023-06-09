import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import MyContext from "./MyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MyServices = () => {
    const navigate = useNavigate();
    const { logUser } = useContext(MyContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios({
                    method: "GET",
                    url: `http://localhost:5000/products/${logUser.result.username}`,
                });
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        const interval = setInterval(fetchData, 1000);
        return () => clearInterval(interval);
    });
    // console.log(data);
    if (data === undefined || data.length === 0) {
        return <h1 style={{ textAlign: "center" }}>No Products</h1>;
    }
    var headingsMap = {
        ID: "id",
        Title: "title",
        Desc: "description",
        Price: "price",
        Discount: "discountPercentage",
        Rating: "rating",
        Stock: "stock",
        Brand: "brand",
        Category: "category",
        Thumbnail: "thumbnail",
        Image: "image",
        Provider: "provider",
    };
    var headings = Object.keys(headingsMap);
    return (
        <table>
            <thead>
                <tr>
                    {headings.map((heading, index) => (
                        <th key={index}>{heading}</th>
                    ))}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => {
                    const handleEdit = () => {
                        console.log(`Edit _id: ${row._id}`);
                        navigate(`/product/${row._id}`);
                    };

                    const handleDelete = async () => {
                        console.log(`Delete _id: ${row._id}`);
                        await axios({
                            method: "DELETE",
                            url: `http://localhost:5000/products/${row._id}`,
                        })
                    };

                    return(
                        <tr key={index} className="all-services-content">
                            {headings.map((heading, index) => (
                                <td key={index}>{row[headingsMap[heading]]}</td>
                            ))}
                            <td>
                                <FontAwesomeIcon
                                    className="fa-icon fa-pencil"
                                    icon={faPencil}
                                    size="xl"
                                    onClick={handleEdit}
                                />
                                <FontAwesomeIcon
                                    className="fa-icon fa-trash"
                                    icon={faTrash}
                                    size="xl"
                                    onClick={handleDelete}
                                />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default MyServices;
