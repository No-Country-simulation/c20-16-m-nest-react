"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormReport from "@/components/reportForm/FormReport";

const ReportFormPage: React.FC = () => {
  const methods = useForm();

  const handleSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("reportData", JSON.stringify(data));

    if (data.images) {
      data.images.forEach((image: File) => formData.append("images", image));
    }

<<<<<<< HEAD
  const handleSubmit = (formData: /* FormData */any) => {
=======
>>>>>>> fb763d72345241e6f935ddf44a118941a79a707c
    console.log("Enviando datos del formulario...", formData);

    // Para conexion back
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col">
      <div className="w-full mx-auto pt-32 flex justify-center items-center">
        <div className="w-9/12 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0">
          <div className="md:w-2/6">
            <h1 className="text-4xl text-primary font-bold mb-8">
              Reportar Mascota
            </h1>
            <FormReport /* images={images} */ onSubmit={handleSubmit} />
          </div>
          <div className="w-full min-h-screen flex justify-center items-center md:w-4/6 ">
            <ImgLoader onImageUpload={handleImageUpload} />
          </div>
        </div>
=======
    <div className="min-h-screen flex flex-col items-center justify-center pt-32">
      <div className="w-11/12 md:w-10/12">
        <h1 className="w-full text-4xl text-primary font-bold mb-8 text-left">
          Reportar Mascota
        </h1>
        <FormProvider {...methods}>
          <FormReport onSubmit={handleSubmit} />
        </FormProvider>
>>>>>>> fb763d72345241e6f935ddf44a118941a79a707c
      </div>
    </div>
  );
};

export default ReportFormPage;