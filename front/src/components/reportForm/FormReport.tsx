"use client"
import React from 'react';

interface FormReportProps {
    images: File[];
    onSubmit: (formData: FormData) => void;
}

const FormReport: React.FC<FormReportProps> = ({ images, onSubmit }) => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        const formElements = event.target as HTMLFormElement;
        const inputs = formElements.elements;

        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i] as HTMLInputElement;
            if (input.name && input.value) {
                formData.append(input.name, input.value);
            }
        }

        images.forEach((image, index) => {
            formData.append(`image_${index}`, image);
        });

        onSubmit(formData);
    };

    return (
        <form className="space-y-4 py-8" onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Título"
                className="w-full p-2 bg-gray-100 rounded-3xl outline-primary"
            />
            <textarea
                name="description"
                placeholder="Descripción"
                className="w-full p-2 bg-gray-100 rounded-3xl scrollbar-hide outline-primary"
                rows={3}
            />
            <input
                type="text"
                name="species"
                placeholder="Especie"
                className="w-full p-2 bg-gray-100 rounded-3xl outline-primary"
            />
            <input
                type="text"
                name="gender"
                placeholder="Sexo"
                className="w-full p-2 bg-gray-100 rounded-3xl outline-primary"
            />
            <input
                type="text"
                name="province"
                placeholder="Provincia"
                className="w-full p-2 bg-gray-100 rounded-3xl outline-primary"
            />
            <input
                type="text"
                name="locality"
                placeholder="Localidad"
                className="w-full p-2 bg-gray-100 rounded-3xl outline-primary"
            />
            <div className="flex space-x-4">
                <input
                    type="text"
                    name="street"
                    placeholder="Calle"
                    className="flex-1 p-2 bg-gray-100 rounded-3xl outline-primary"
                />
                <input
                    type="text"
                    name="number"
                    placeholder="Altura"
                    className="w-2/6 p-2 bg-gray-100 rounded-3xl outline-primary"
                />
            </div>
            <input
                type="text"
                name="postal_code"
                placeholder="Código Postal"
                className="w-full p-2 bg-gray-100 rounded-3xl outline-primary"
            />
            <button
                type="submit"
                className="w-3/6 lg:w-2/6 p-2 bg-primary text-white rounded-3xl hover:bg-accent hover:duration-300"
            >
                Enviar
            </button>
        </form>
    );
};

export default FormReport;
