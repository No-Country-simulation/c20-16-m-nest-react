export interface ReportCardProps {
  title: string;
  description: string;
  images: {
    urls: string[];
    files?: File[];
  };
  species: "dog" | "cat";
  sex: "macho" | "hembra";
  location: {
    street: string;
    number: number;
    province:
      | "buenos_aires"
      | "catamarca"
      | "chaco"
      | "chubut"
      | "cordoba"
      | "corrientes"
      | "entre_rios"
      | "formosa"
      | "jujuy"
      | "la_pampa"
      | "la_rioja"
      | "mendoza"
      | "misiones"
      | "neuquen"
      | "rio_negro"
      | "salta"
      | "san_juan"
      | "san_luis"
      | "santa_cruz"
      | "santa_fe"
      | "santiago_del_estero"
      | "tierra_del_fuego"
      | "tucuman";
    locality: string;
    postalCode: number;
  };
}
