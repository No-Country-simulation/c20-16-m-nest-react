"use client";
import React, { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import { Specie } from "@/interfaces/FormReport/specie";
import { Sex } from "@/interfaces/FormReport/sex";
import { Provincia } from "@/interfaces/FormReport/province";
import { FaTrash, FaPlus } from "react-icons/fa";

const formReportSchema = z.object({
  title: z.string().min(1, { message: "El título es obligatorio" }),
  description: z.string().min(1, { message: "La descripción es obligatoria" }),
  species: z.enum(["dog", "cat"], {
    errorMap: () => ({ message: "La especie es obligatoria" }),
  }),
  sex: z.enum(["macho", "hembra"], {
    errorMap: () => ({ message: "El sexo es obligatorio" }),
  }),
  province: z.enum(
    [
      "buenos_aires",
      "catamarca",
      "chaco",
      "chubut",
      "cordoba",
      "corrientes",
      "entre_rios",
      "formosa",
      "jujuy",
      "la_pampa",
      "la_rioja",
      "mendoza",
      "misiones",
      "neuquen",
      "rio_negro",
      "salta",
      "san_juan",
      "san_luis",
      "santa_cruz",
      "santa_fe",
      "santiago_del_estero",
      "tierra_del_fuego",
      "tucuman",
    ],
    {
      errorMap: () => ({ message: "La provincia es obligatoria" }),
    }
  ),
  locality: z.string().min(1, { message: "La localidad es obligatoria" }),
  street: z.string().min(1, { message: "La calle es obligatoria" }),
  number: z
    .number({ invalid_type_error: "Debe ingresar un número" })
    .min(1, { message: "La altura es obligatoria" }),
  postalCode: z
    .number({ invalid_type_error: "Debe ingresar un número" })
    .min(1, { message: "El código postal es obligatorio" }),
  images: z.array(z.instanceof(File)).optional(),
});

const species: Specie[] = [
  { key: "dog", label: "Perro" },
  { key: "cat", label: "Gato" },
];

const sexs: Sex[] = [
  { key: "macho", label: "Macho" },
  { key: "hembra", label: "Hembra" },
];

const provincias: Provincia[] = [
  { key: "buenos_aires", label: "Buenos Aires" },
  { key: "catamarca", label: "Catamarca" },
  { key: "chaco", label: "Chaco" },
  { key: "chubut", label: "Chubut" },
  { key: "cordoba", label: "Córdoba" },
  { key: "corrientes", label: "Corrientes" },
  { key: "entre_rios", label: "Entre Ríos" },
  { key: "formosa", label: "Formosa" },
  { key: "jujuy", label: "Jujuy" },
  { key: "la_pampa", label: "La Pampa" },
  { key: "la_rioja", label: "La Rioja" },
  { key: "mendoza", label: "Mendoza" },
  { key: "misiones", label: "Misiones" },
  { key: "neuquen", label: "Neuquén" },
  { key: "rio_negro", label: "Río Negro" },
  { key: "salta", label: "Salta" },
  { key: "san_juan", label: "San Juan" },
  { key: "san_luis", label: "San Luis" },
  { key: "santa_cruz", label: "Santa Cruz" },
  { key: "santa_fe", label: "Santa Fe" },
  { key: "santiago_del_estero", label: "Santiago del Estero" },
  { key: "tierra_del_fuego", label: "Tierra del Fuego" },
  { key: "tucuman", label: "Tucumán" },
];

type FormData = z.infer<typeof formReportSchema>;

interface FormReportProps {
  onSubmit: (data: FormData) => void;
}

const FormReport: React.FC<FormReportProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formReportSchema),
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = methods;

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState<number | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const currentImages = getValues("images") || [];

    if (files && files.length > 0) {
      const newImages = Array.from(files);
      if (currentImages.length + newImages.length <= 6) {
        const newPreviews = newImages.map((file) => URL.createObjectURL(file));

        setIsAdding(true);
        setTimeout(() => setIsAdding(false), 300);

        setImagePreviews((prev) => [...prev, ...newPreviews]);
        setValue("images", [...currentImages, ...newImages]);
      } else {
        alert("Puedes subir un máximo de 6 imágenes");
      }
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setIsRemoving(indexToRemove);
    setTimeout(() => {
      const updatedPreviews = imagePreviews.filter(
        (_, index) => index !== indexToRemove
      );
      const currentImages = getValues("images");
      const updatedImages = currentImages
        ? currentImages.filter(
            (_: File, index: number) => index !== indexToRemove
          )
        : [];

      setImagePreviews(updatedPreviews);
      setValue("images", updatedImages);
      setIsRemoving(null);
    }, 300);
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-4 py-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-2/6 lg:w-2/6 flex flex-col gap-5">
            <Input
              {...register("title")}
              label="Título"
              variant="flat"
              isInvalid={!!errors.title}
              errorMessage={errors.title?.message}
            />
            <Textarea
              {...register("description")}
              label="Descripción"
              variant="flat"
              rows={2}
              isInvalid={!!errors.description}
              errorMessage={errors.description?.message}
            />
            <Select
              {...register("species")}
              label="Selecciona especie"
              isInvalid={!!errors.species}
              errorMessage={errors.species?.message}
            >
              {species.map((specie) => (
                <SelectItem key={specie.key} value={specie.key}>
                  {specie.label}
                </SelectItem>
              ))}
            </Select>
            <Select
              {...register("sex")}
              label="Selecciona el sexo"
              isInvalid={!!errors.sex}
              errorMessage={errors.sex?.message}
            >
              {sexs.map((sex) => (
                <SelectItem key={sex.key} value={sex.key}>
                  {sex.label}
                </SelectItem>
              ))}
            </Select>
            <Select
              {...register("province")}
              label="Selecciona provincia"
              isInvalid={!!errors.province}
              errorMessage={errors.province?.message}
            >
              {provincias.map((provincia) => (
                <SelectItem key={provincia.key} value={provincia.key}>
                  {provincia.label}
                </SelectItem>
              ))}
            </Select>
            <Input
              {...register("locality")}
              label="Localidad"
              variant="flat"
              isInvalid={!!errors.locality}
              errorMessage={errors.locality?.message}
            />
            <div className="w-full flex space-x-4">
              <Input
                {...register("street")}
                label="Calle"
                variant="flat"
                isInvalid={!!errors.street}
                errorMessage={errors.street?.message}
                className="w-4/6"
              />
              <Input
                {...register("number", { valueAsNumber: true })}
                label="Altura"
                variant="flat"
                isInvalid={!!errors.number}
                errorMessage={errors.number?.message}
                className="w-2/6"
              />
            </div>
            <Input
              {...register("postalCode", { valueAsNumber: true })}
              label="Código Postal"
              variant="flat"
              isInvalid={!!errors.postalCode}
              errorMessage={errors.postalCode?.message}
            />
          </div>

          <div className="w-full md:w-4/6 lg:w-3/6 p-8 flex justify-center items-center">
            <Controller
              name="images"
              control={control}
              render={({ field }) => (
                <>
                  {imagePreviews.length === 0 ? (
                    <div className="border-dashed border-4 border-primary p-8 rounded-3xl flex flex-col items-center justify-center w-4/6 h-96">
                      <label
                        htmlFor="imageUpload"
                        className="cursor-pointer text-primary text-lg md:text-2xl text-center font-semibold"
                      >
                        Subir imágenes (png, jpg)
                      </label>
                      <input
                        type="file"
                        id="imageUpload"
                        name="imageUpload"
                        accept="image/png, image/jpeg"
                        onChange={handleImageUpload}
                        multiple
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
                      {imagePreviews.map((preview, index) => (
                        <div
                          key={index}
                          className={`relative w-full h-40 md:h-36 lg:h-48 flex-shrink-0 transition-all duration-300 transform ${
                            isRemoving === index
                              ? "opacity-0 scale-75"
                              : "opacity-100 scale-100"
                          } ${
                            isAdding
                              ? "opacity-0 scale-75"
                              : "opacity-100 scale-100"
                          }`}
                        >
                          <img
                            src={preview}
                            alt={`Upload Preview ${index + 1}`}
                            className="w-full h-full object-cover rounded-3xl transition-opacity duration-300"
                          />
                          <button
                            type="button"
                            className="absolute top-2 right-2 bg-accent text-white rounded-full p-2 hover:scale-110 hover:duration-300"
                            onClick={() => handleRemoveImage(index)}
                          >
                            <FaTrash size={16} />
                          </button>
                        </div>
                      ))}

                      {imagePreviews.length < 6 && (
                        <div className="border-dashed border-4 border-primary p-8 rounded-3xl flex items-center justify-center w-full h-40 lg:h-48 cursor-pointer transition-all duration-300 transform opacity-100 scale-100">
                          <label
                            htmlFor="imageUploadMore"
                            className="flex flex-col items-center text-center text-primary text-sm lg:text-base font-semibold cursor-pointer"
                          >
                            <FaPlus className="text-5xl text-shadow" />
                            Agregar más <br />
                            (máx. 6 imágenes)
                          </label>
                          <input
                            type="file"
                            id="imageUploadMore"
                            name="imageUploadMore"
                            accept="image/png, image/jpeg"
                            onChange={handleImageUpload}
                            multiple
                            className="hidden"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className="w-full flex justify-center md:justify-start">
          <button
            type="submit"
            className="w-6/12 lg:w-1/12 py-4 md:py-2 m-4 bg-primary text-white text-xl rounded-full text-center hover:bg-gray-500 hover:duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormReport;
