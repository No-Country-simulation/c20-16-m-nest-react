// "use client";
// import React, { useState } from "react";
// import { useFormContext, Controller } from "react-hook-form";
// import { FaTrash, FaPlus } from "react-icons/fa";

// interface ImgLoaderProps {
//     images: File[];
//     onImageUpload: (uploadedImages: File[]) => void;
// }

// const ImgLoader: React.FC<ImgLoaderProps> = ({ images, onImageUpload }) => {
//     const { control, setValue, getValues } = useFormContext();
//     const [imagePreviews, setImagePreviews] = useState<string[]>(
//         images.map((image) => URL.createObjectURL(image))
//     );
//     const [isAdding, setIsAdding] = useState(false);
//     const [isRemoving, setIsRemoving] = useState<number | null>(null);

//     const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const files = event.target.files;
//         const currentImages = getValues("images") || [];

//         if (files && files.length > 0) {
//             const newImages = Array.from(files);
//             if (currentImages.length + newImages.length <= 6) {
//                 const newPreviews = newImages.map((file) =>
//                     URL.createObjectURL(file)
//                 );

//                 setIsAdding(true);
//                 setTimeout(() => setIsAdding(false), 300);

//                 setImagePreviews((prev) => [...prev, ...newPreviews]);
//                 setValue("images", [...currentImages, ...newImages]);
//                 onImageUpload([...currentImages, ...newImages]);
//             } else {
//                 alert("Puedes subir un máximo de 6 imágenes");
//             }
//         }
//     };

//     const handleRemoveImage = (indexToRemove: number) => {
//         setIsRemoving(indexToRemove);
//         setTimeout(() => {
//             const updatedPreviews = imagePreviews.filter(
//                 (_, index) => index !== indexToRemove
//             );
//             const updatedImages = getValues("images").filter(
//                 (_: File, index: number) => index !== indexToRemove
//             );

//             setImagePreviews(updatedPreviews);
//             setValue("images", updatedImages);
//             onImageUpload(updatedImages);
//             setIsRemoving(null);
//         }, 300);
//     };

//     return (
//         <div className="w-5/6 flex justify-center">
//             <Controller
//                 name="images"
//                 control={control}
//                 render={({ field }) => (
//                     <>
//                         {imagePreviews.length === 0 ? (
//                             <div className="border-dashed border-4 border-primary p-8 rounded-3xl flex flex-col items-center justify-center w-4/6 h-96">
//                                 <label
//                                     htmlFor="imageUpload"
//                                     className="cursor-pointer text-primary text-lg font-semibold"
//                                 >
//                                     Subir imágenes (png, jpg)
//                                 </label>
//                                 <input
//                                     type="file"
//                                     id="imageUpload"
//                                     name="imageUpload"
//                                     accept="image/png, image/jpeg"
//                                     onChange={handleImageUpload}
//                                     multiple
//                                     className="hidden"
//                                 />
//                             </div>
//                         ) : (
//                             <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
//                                 {imagePreviews.map((preview, index) => (
//                                     <div
//                                         key={index}
//                                         className={`relative w-full h-40 lg:h-48 flex-shrink-0 transition-all duration-300 transform ${isRemoving === index
//                                             ? "opacity-0 scale-75"
//                                             : "opacity-100 scale-100"
//                                             } ${isAdding
//                                                 ? "opacity-0 scale-75"
//                                                 : "opacity-100 scale-100"
//                                             }`}
//                                     >
//                                         <img
//                                             src={preview}
//                                             alt={`Upload Preview ${index + 1}`}
//                                             className="w-full h-full object-cover rounded-3xl transition-opacity duration-300"
//                                         />
//                                         <button
//                                             className="absolute top-2 right-2 bg-accent text-white rounded-full p-2 hover:scale-110 hover:duration-300"
//                                             onClick={() => handleRemoveImage(index)}
//                                         >
//                                             <FaTrash size={16} />
//                                         </button>
//                                     </div>
//                                 ))}

//                                 {/* agregar mas */}
//                                 {imagePreviews.length < 6 && (
//                                     <div className="border-dashed border-4 border-primary p-8 rounded-3xl flex items-center justify-center w-full h-40 lg:h-48 cursor-pointer transition-all duration-300 transform opacity-100 scale-100">
//                                         <label
//                                             htmlFor="imageUploadMore"
//                                             className="flex flex-col items-center text-center text-primary text-sm lg:text-base font-semibold cursor-pointer"
//                                         >
//                                             <FaPlus className="text-5xl text-shadow" />
//                                             Agregar más <br />
//                                             (máx. 6 imágenes)
//                                         </label>
//                                         <input
//                                             type="file"
//                                             id="imageUploadMore"
//                                             name="imageUploadMore"
//                                             accept="image/png, image/jpeg"
//                                             onChange={handleImageUpload}
//                                             multiple
//                                             className="hidden"
//                                         />
//                                     </div>
//                                 )}
//                             </div>
//                         )}
//                     </>
//                 )}
//             />
//         </div>
//     );
// };

// export default ImgLoader;
