"use client";
import { useState, useEffect } from "react";
import { ReportCard } from "@/components/report/ReportCard";
import { FaSearch } from "react-icons/fa";
import ReportButton from "@/components/report/ReportButton";
import ReportFilterBtn from "@/components/report/ReportFilterBtn";
import { ReportCardProps } from "@/interfaces/ReportCard";
import { aplyJson } from "@/context/zustang";
import { Spinner } from "@nextui-org/react";

const ReportPage: React.FC = () => {
  const allReports: ReportCardProps[] = [
    {
      title: "Perro perdido en Junín",
      description:
        "Este perro estuvo afuera de mi casa llorando toda la noche, parece que sí tiene dueño porque se lo ve cuidado. No tiene collar.",
      images: {
        urls: ["./images/reports/dog1.jpeg"],
      },
      species: "Perro",
      sex: "Macho",
      size: "Mediano",
      location: {
        street: "Av. Libertador",
        number: 123,
        province: "Buenos Aires",
        locality: "Junín",
        postalCode: 6000,
      },
    },
    {
      title: "Gata perdida",
      description:
        "Una gata ha estado rondando mi jardín, parece asustada. No tiene collar, la resguardé en mi patio cerrado esperando dar con sus dueños.",
      images: {
        urls: ["./images/reports/cat1.jpeg"],
      },
      species: "Gato",
      sex: "Hembra",
      size: "Pequeño",
      location: {
        street: "Calle 50",
        number: 456,
        province: "San Juan",
        locality: "Pocito",
        postalCode: 1900,
      },
    },
    {
      title: "Gato perdido en Lavalle",
      description:
        "Un gato ha estado rondando cerca de casa, parece perdido.  Lo resguardé en casa esperando a sus papis.",
      images: {
        urls: ["./images/reports/cat2.jpeg"],
      },
      species: "Gato",
      sex: "Macho",
      size: "Pequeño",
      location: {
        street: "Calle 50",
        number: 456,
        province: "Mendoza",
        locality: "Lavalle",
        postalCode: 1900,
      },
    },
    {
      title: "Perrita perdida en Nogolí, San Luis",
      description:
        "Esta perrita apareció en mi vereda. Parece abandonada, tiene marca de collar pero no lo lleva encima.",
      images: {
        urls: ["./images/reports/dog2.jpg"],
      },
      species: "Perro",
      sex: "Hembra",
      size: "Pequeño",
      location: {
        street: "Antartida Argentina",
        number: 123,
        province: "San Luis",
        locality: "Nogolí",
        postalCode: 6000,
      },
    },
    {
      title: "Gata encontrada en La Plata",
      description:
        "Gata encontrada cerca de un parque, es muy amigable y dócil. Pelaje negro con blanco, parece estar buscando a su dueño.",
      images: {
        urls: ["./images/reports/cat3.jpg"],
      },
      species: "Gato",
      sex: "Hembra",
      size: "Pequeño",
      location: {
        street: "Calle 7",
        number: 456,
        province: "Buenos Aires",
        locality: "La Plata",
        postalCode: 1900,
      },
    },
    {
      title: "Perra perdida en Rosario",
      description:
        "Perra blanca encontrada caminando por el barrio, parece perdida. No tiene collar, de tamaño grande y tranquila.",
      images: {
        urls: ["./images/reports/dog3.jpg"],
      },
      species: "Perro",
      sex: "Hembra",
      size: "Grande",
      location: {
        street: "Calle Córdoba",
        number: 789,
        province: "Santa Fe",
        locality: "Rosario",
        postalCode: 2000,
      },
    },
    {
      title: "Perro encontrado en Bariloche",
      description:
        "Este perro grande y peludo fue encontrado en la ruta cerca de Bariloche. Parece estar acostumbrado al frío y es muy amigable.",
      images: {
        urls: ["./images/reports/dog4.jpg"],
      },
      species: "Perro",
      sex: "Macho",
      size: "Grande",
      location: {
        street: "Ruta 40",
        number: 1122,
        province: "Río Negro",
        locality: "San Carlos de Bariloche",
        postalCode: 8400,
      },
    },
    {
      title: "Gato visto en Mendoza",
      description:
        "Este gato fue visto en el centro de Mendoza. Es de pelaje marrón y está bien cuidado. Parece doméstico y está perdido.",
      images: {
        urls: ["./images/reports/cat4.jpg"],
      },
      species: "Gato",
      sex: "Macho",
      size: "Pequeño",
      location: {
        street: "Calle San Martín",
        number: 101,
        province: "Mendoza",
        locality: "Mendoza",
        postalCode: 5500,
      },
    },
    {
      title: "Perra perdida en Córdoba",
      description:
        "Esta perra estuvo rondando por el barrio desde hace unos días. Es de tamaño pequeño, con pelaje blanco y marrón, muy amigable.",
      images: {
        urls: ["./images/reports/dog5.jpeg"],
      },
      species: "Perro",
      sex: "Hembra",
      size: "Pequeño",
      location: {
        street: "Av. Colón",
        number: 333,
        province: "Córdoba",
        locality: "Córdoba",
        postalCode: 5000,
      },
    },
    {
      title: "Gato perdido en Salta",
      description:
        "Se perdió mi gatito hace 2 días. Es un siamés de ojos azules, muy manso. Si alguien lo vio, por favor contácteme.",
      images: {
        urls: ["./images/reports/cat5.jpeg"],
      },
      species: "Gato",
      sex: "Macho",
      size: "Pequeño",
      location: {
        street: "Calle Güemes",
        number: 555,
        province: "Salta",
        locality: "Salta",
        postalCode: 4400,
      },
    },
    // cards de ejemplo, funcionalidad front por ahora

  ];

  const { allReportAnimals, getReportAnimals }: any = aplyJson();

  const [filteredReports, setFilteredReports] =
    useState<ReportCardProps[]>(allReportAnimals);
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [filters, setFilters] = useState({
    species: [] as string[],
    size: [] as string[],
    sex: [] as string[],
    province: [] as string[],
  });
  const [loadingReport, setLoadingRepots] = useState(false);

  useEffect(() => {
    getReportAnimals();
  }, []);

  useEffect(() => {
    setFilteredReports(allReportAnimals);
    setLoadingRepots(true);
  }, [allReportAnimals]);

  console.log(allReportAnimals);

  const applyFilters = (newFilters: {
    species: string[];
    size: string[];
    sex: string[];
    province: string[];
  }) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = allReportAnimals.filter((report: any) => {
        const matchesFilters =
          (filters.species.length === 0 || filters.species.includes(report.species)) &&
          (filters.size.length === 0 || filters.size.includes(report.size)) &&
          (filters.sex.length === 0 || filters.sex.includes(report.sex)) &&
          (filters.province.length === 0 || filters.province.includes(report.location.province));

        const matchesSearch =
          report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.sex.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.size.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.location.province.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.location.locality.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilters && matchesSearch;
      });

      setFilteredReports(filtered);
      setNoResults(filtered.length === 0);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, filters, allReportAnimals]);

  const handleSearch = () => {
    setSearchTerm(searchTerm);
  };

  /* if(!allReportAnimals){
    return(<div>Cargando....</div>)
  } */

  return (
    <div className="flex flex-col min-h-screen text-white">
      <div className="pt-[2rem] flex-grow bg-[url('/images/background-report.png')] bg-bottom bg-no-repeat bg-cover overflow-hidden">
        <div className="container mx-auto px-4 my-32 md:px-6 lg:px-8">
          <h1 className="text-4xl text-primary font-bold my-8 w-full md:w-3/4 lg:w-2/6">
            Reporte de mascotas
          </h1>
          <div className="flex flex-col items-start gap-4 mb-8">
            <div className="relative w-full md:w-3/4 lg:w-2/6">
              <input
                type="text"
                placeholder="Buscar mascota por titulo, localidad, provincia, etc..."
                className="p-2 pr-10 rounded-full text-black w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <FaSearch
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-black text-2xl cursor-pointer"
                onClick={handleSearch}
              />
            </div>
            <ReportFilterBtn onApplyFilters={applyFilters} />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        {!loadingReport ? (
          <div className="flex w-full h-full items-center justify-center">
            <Spinner size="lg" />
          </div>
        ) : (
          ""
        )}
        {noResults ? (
          <div className="w-full flex justify-center p-4">
            <div className="w-1/2 h-96 flex flex-col items-center justify-center text-center gap-8">
              <img src="/svg/cat-and-dog/amico.svg" alt="gatoyperro" />
              <span className="text-3xl text-gray-600">
                ¡No se han encontrado mascotas con las características
                proporcionadas!
              </span>
            </div>
          </div>
        ) : (
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {filteredReports.map((report, index) => (
              <ReportCard key={index} {...report} />
            ))}
          </div>
        )}
      </div>
      <ReportButton />
    </div>
  );
};

export default ReportPage;
