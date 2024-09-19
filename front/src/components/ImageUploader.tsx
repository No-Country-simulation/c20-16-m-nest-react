import React, { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import { useFormContext, Controller } from "react-hook-form";

interface ImageUploaderProps {
  maxImages?: number;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ maxImages = 6 }) => {
  const {
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useFormContext();
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState<number | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const currentImages = getValues("images") || [];

    if (files && files.length > 0) {
      const newImages = Array.from(files);
      const newImageFiles = [...currentImages, ...newImages];
      if (newImageFiles.length <= maxImages) {
        const newPreviews = newImages.map((file) => URL.createObjectURL(file));

        setIsAdding(true);
        setTimeout(() => setIsAdding(false), 200);

        setImagePreviews((prev) => [...prev, ...newPreviews]);
        setValue("images", newImageFiles);
      } else {
        alert(`Puedes subir un máximo de ${maxImages} imágenes`);
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
    }, 200);
  };

  return (
    <Controller
      name="images"
      control={control}
      render={() => (
        <>
          {imagePreviews.length === 0 ? (
            <div
              className={`border-dashed border-4 border-primary p-8 rounded-3xl flex flex-col items-center justify-center w-full h-96 ${
                errors.images ? "border-red-500" : ""
              }`}
            >
              <label
                htmlFor="imageUpload"
                className="cursor-pointer text-primary text-lg md:text-2xl text-center font-semibold"
              >
                Sube tus imágenes
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
              {errors.images && (
                <p className="text-red-500 mt-2">
                  {errors.images.message?.toString()}
                </p>
              )}
            </div>
          ) : (
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
              {imagePreviews.map((preview, index) => (
                <div
                  key={index}
                  className={`relative w-full h-40 md:h-36 lg:h-48 flex-shrink-0 transition-all duration-300 transform ${
                    isRemoving === index
                      ? "opacity-0 scale-50"
                      : "opacity-100 scale-100"
                  } ${
                    isAdding ? "opacity-0 scale-105" : "opacity-100 scale-100"
                  }`}
                >
                  <img
                    src={preview}
                    alt={`Upload Preview ${index + 1}`}
                    className="w-full h-full object-cover rounded-3xl transition-opacity duration-200"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 bg-accent text-white rounded-full p-2 hover:scale-110 hover:duration-200"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              ))}

              {imagePreviews.length < maxImages && (
                <div className="border-dashed border-4 border-primary p-8 rounded-3xl flex items-center justify-center w-full h-40 lg:h-48 transition-all duration-200 transform opacity-100 scale-100">
                  <label
                    htmlFor="imageUploadMore"
                    className="flex flex-col items-center text-center text-primary text-sm lg:text-base font-semibold cursor-pointer hover:scale-105 hover:duration-150"
                  >
                    <FaPlus className="text-5xl text-shadow" />
                    Agregar más <br />
                    (máx. {maxImages} imágenes)
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
  );
};

export default ImageUploader;
