"use client";
import { useState } from "react";
import { ReportCard } from "@/components/report/ReportCard";
import { FaSearch } from "react-icons/fa";
import ReportButton from "@/components/report/ReportButton";
import ReportFilterBtn from "@/components/report/ReportFilterBtn";
import { ReportCardProps } from "@/interfaces/ReportCard";

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
  ];

  const [filteredReports, setFilteredReports] = useState<ReportCardProps[]>(allReports);
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [filters, setFilters] = useState({
    species: [] as string[],
    size: [] as string[],
    sex: [] as string[],
    province: [] as string[],
  });

  const applyFilters = (newFilters: {
    species: string[];
    size: string[];
    sex: string[];
    province: string[];
  }) => {
    setFilters(newFilters);
    const filtered = allReports.filter(report => {
      return (
        (newFilters.species.length === 0 || newFilters.species.includes(report.species)) &&
        (newFilters.size.length === 0 || newFilters.size.includes(report.size)) &&
        (newFilters.sex.length === 0 || newFilters.sex.includes(report.sex)) &&
        (newFilters.province.length === 0 || newFilters.province.includes(report.location.province))
      );
    });

    const searchFiltered = filtered.filter(report =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredReports(searchFiltered);
    setNoResults(searchFiltered.length === 0);
  };

  const handleSearch = () => {
    const searchFiltered = allReports.filter(report =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    applyFilters(filters);
  };

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
                placeholder="Buscar mascota..."
                className="p-2 pr-10 rounded-full text-black w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
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
        {noResults ? (
          <div className="w-full flex justify-center p-4">
            <div className="w-1/2 h-96 flex flex-col items-center justify-center text-center gap-8">
              <img src="/svg/cat-and-dog/amico.svg" alt="gatoyperro" />
              <span className="text-3xl text-gray-600">¡No se han encontrado mascotas con las características proporcionadas!</span>
            </div>
          </div>
        ) : (
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {filteredReports.map((report, index) => (
              <ReportCard
                key={index}
                {...report}
              />
            ))}
          </div>
        )}
      </div>
      <ReportButton />
    </div>
  );
};

export default ReportPage;
