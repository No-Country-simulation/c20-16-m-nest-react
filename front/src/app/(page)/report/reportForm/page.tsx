"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormReport from "@/components/reportForm/FormReport";
import ImgLoader from "@/components/reportForm/ImgLoader";

const ReportFormPage: React.FC = () => {
  const methods = useForm();
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (uploadedImages: File[]) => {
    setImages(uploadedImages);
  };

  const handleSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("reportData", JSON.stringify(data));
    images.forEach((image) => formData.append("images", image));

    console.log("Enviando datos del formulario...", formData);

    // Para conexion back
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full mx-auto pt-32 flex justify-center items-center">
        <div className="md:w-10/12 flex flex-col gap-8 justify-center items-start py-8 my-2">
          <h1 className="text-4xl text-primary font-bold m-4 mb-8">
            Reportar Mascota
          </h1>
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-2/6">
              {/* envuelvo los componentes para compartir contexto */}
              <FormProvider {...methods}>
                <FormReport images={images} onSubmit={handleSubmit} />
              </FormProvider>
            </div>
            <div className="w-full flex justify-center items-start md:w-4/6 md:justify-end">
              <FormProvider {...methods}>
                <ImgLoader images={images} onImageUpload={handleImageUpload} />
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportFormPage;
