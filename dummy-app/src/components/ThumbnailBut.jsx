import { useRef } from "react";

const ThumbnailBut = ({ product, setProduct }) => {
    const thumbnailInputRef = useRef();
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
                htmlFor="thumbnailUpload"
                className="file-button"
                style={{
                    float: "left",
                }}
            >
                Upload Thumbnail
            </label>
            <input
                id="thumbnailUpload"
                name="thumbnailUpload"
                ref={thumbnailInputRef}
                style={{ display: "none" }}
                type="file"
                onChange={async () => {
                    const image = await getBase64(
                        thumbnailInputRef.current.files[0]
                    );
                    setProduct({ ...product, thumbnail: image });
                    console.log("THUMBNAIL", { ...product, images: image });
                }}
                accept="image/png,image/jpg,image/jpeg"
            />
        </div>
    );
};

export default ThumbnailBut;
