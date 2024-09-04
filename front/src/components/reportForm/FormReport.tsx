

const FormReport: React.FC = () => {
    return (
        <form>
            <div>
                <label htmlFor="petName">Nombre:</label>
                <input type="text" id="petName" name="petName" required />
            </div>
            <div>
                <label htmlFor="description">Descripción:</label>
                <textarea id="description" name="description" required />
            </div>
            <button type="submit">Reportar</button>
        </form>
        // estructura de ejemplo
    );
};

export default FormReport;
