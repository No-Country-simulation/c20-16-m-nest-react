"use client";
import FormReport from "@/components/reportForm/FormReport";
import LoadingSpinner from "@/components/UI/LoadingSpinner/LoadingSpinner";
import { aplyJson } from "@/context/zustang";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const ReportFormPage: React.FC = () => {
  const methods = useForm();
  const { postReportAnimals, postImageUpload, isLoading, setIsLoading }: any =
    aplyJson();
  const handleSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("reportData", JSON.stringify(data));

    if (data.images) {
      data.images.forEach((image: File) => formData.append("images", image));
    }

    setIsLoading();
    //postImageUpload(data.images);
    /* let imagesFinal = data.images.map((item: any) => uploadFile(item))
    console.log(imagesFinal) */
    postReportAnimals(data);
    /* const res = axios.post("http://localhost:8000/reportAnimals", {
      title: data.title,
      description: data.description,
      images: {
        urls: data.images.url,
      },
      species: data.species,
      sex: data.sex,
      size: data.size,
      location: {
        street: data.location.street,
        number: data.location.number,
        province: data.location.province,
        locality: data.location.locality,
        postalCode: data.location.postalCode,
      },
    }); */

    // Para conexion back
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-32">
      {isLoading ? (
        <div className="w-11/12 md:w-10/12">
          <h1 className="w-full text-4xl text-primary font-bold mb-8 text-left">
            Reportar Mascota
          </h1>
          <FormProvider {...methods}>
            <FormReport onSubmit={handleSubmit} />
          </FormProvider>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default ReportFormPage;
