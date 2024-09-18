export interface ReportCardProps {
  title: string;
  description: string;
  images: {
    urls: string[];
    files?: File[];
  };
  species: "Perro" | "Gato";
  sex: "Macho" | "Hembra";
  size: "Pequeño" | "Mediano" | "Grande";
  location: {
    street: string;
    number: number;
    province:
      | "Buenos Aires"
      | "Catamarca"
      | "Chaco"
      | "Chubut"
      | "CÓrdoba"
      | "Corrientes"
      | "Entre RÍos"
      | "Formosa"
      | "Fujuy"
      | "La Pampa"
      | "La Rioja"
      | "Mendoza"
      | "Misiones"
      | "Neuquén"
      | "Río Negro"
      | "Salta"
      | "San Juan"
      | "San Luis"
      | "Santa Cruz"
      | "Santa Fe"
      | "Santiago del Estero"
      | "Tierra del Fuego"
      | "Tucumán";
    locality: string;
    postalCode: number;
  };
}
