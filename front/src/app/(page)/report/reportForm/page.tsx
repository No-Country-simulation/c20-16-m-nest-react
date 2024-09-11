"use client";
import FormReport from "@/components/reportForm/FormReport";
import ImgLoader from "@/components/reportForm/ImgLoader";
import React, { useState } from "react";

const ReportFormPage: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (uploadedImages: File[]) => {
    setImages(uploadedImages);
  };

  const handleSubmit = (formData: /* FormData */any) => {
    console.log("Enviando datos del formulario...", formData);

    // Para conexion back
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="mx-auto px-4 pt-32 flex-grow flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-3">
          <div className="w-full md:w-2/6">
            <h1 className="text-4xl text-primary font-bold mb-8">
              Reportar Mascota
            </h1>
            <FormReport /* images={images} */ onSubmit={handleSubmit} />
          </div>
          <div className="w-full min-h-screen py-24 md:w-1/2">
            <ImgLoader onImageUpload={handleImageUpload} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportFormPage;
