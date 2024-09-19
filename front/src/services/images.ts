
import { promises as fs } from 'fs';
import path from "path";

export const bytes = async (data: any) => {
  /* const bytes = await data;
  console.log(bytes)
  const buffer = Buffer.from(bytes.name);
  const filePath = path.join(
    process.cwd(),
    "public/images/reports/news",
    data.name
  );
  console.log(filePath);
  fs.writeFile(filePath, buffer); */
  const bytes = await data;
  console.log(bytes);

  // Convertir los datos en un Blob para descargar
  const blob = new Blob([bytes.name], { type: 'text/plain' });

  // Crear una URL de descarga
  const fileURL = URL.createObjectURL(blob);

  // Crear un enlace de descarga y simular un clic para descargar el archivo
  const link = document.createElement("a");
  link.href = fileURL;
  link.download = data.name; // Nombre del archivo descargado
  document.body.appendChild(link);
  link.click();
  
  // Limpieza
  document.body.removeChild(link);
  URL.revokeObjectURL(fileURL); 
};
