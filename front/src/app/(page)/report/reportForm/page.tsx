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

    console.log("Enviando datos del formulario...", formData);

    // Para conexion back
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-32">
      <div className="w-11/12 md:w-10/12">
        <h1 className="w-full text-4xl text-primary font-bold mb-8 text-left">
          Reportar Mascota
        </h1>
        <FormProvider {...methods}>
          <FormReport onSubmit={handleSubmit} />
        </FormProvider>
      </div>
    </div>
  );
};

export default ReportFormPage;
