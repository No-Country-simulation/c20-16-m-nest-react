
const ImgLoader: React.FC = () => {
    return (
        <div>
            <label htmlFor="imageUpload">Subir Imagen:</label>
            <input type="file" id="imageUpload" name="imageUpload" />
        </div>
    );
};

export default ImgLoader;
