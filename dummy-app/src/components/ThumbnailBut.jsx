import { useRef } from "react";

const ThumbnailBut = ({ product, setProduct }) => {
    const imageInputRef = useRef();
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = (error) => {
                reject(error);
            };
        });
    };
    return (
        <div>
            <label
                htmlFor="imageUpload"
                className="file-button"
                style={{
                    float: "left",
                }}
            >
                Upload Thumbnail
            </label>
            <input
                id="imageUpload"
                name="imageUpload"
                ref={imageInputRef}
                style={{ display: "none" }}
                type="file"
                onChange={async () => {
                    const image = await getBase64(
                        imageInputRef.current.files[0]
                    );
                    console.log(typeof image);
                    setProduct({ ...product, thumbnail: image });
                }}
                accept="image/png,image/jpg,image/jpeg"
            />
        </div>
    );
};

export default ThumbnailBut;
