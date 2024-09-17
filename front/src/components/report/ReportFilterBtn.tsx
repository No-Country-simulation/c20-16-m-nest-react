"use client";

import { Modal, ModalContent, ModalHeader, ModalBody, Button } from "@nextui-org/react";
import { MdTune } from "react-icons/md";
import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

export default function ReportFilterBtn() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // Solo permite un item abierto a la vez
    const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string | null }>({
        Especie: null,
        Tamaño: null,
        Sexo: null,
        Provincia: null
    });
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la apertura del modal

    const toggleSingleItem = (index: number) => {
        // Si el índice ya está expandido, lo cerramos, sino lo expandimos y cerramos los demás
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const handleFilter = (category: string, filter: string) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [category]: prevFilters[category] === filter ? null : filter
        }));
        console.log(`Filtro aplicado: ${category} - ${filter}`);
    };

    const handleSearch = () => {
        console.log("Búsqueda realizada con los filtros:", selectedFilters);
        // Aquí puedes agregar la lógica para procesar la búsqueda con los filtros seleccionados
    };

    const handleClearFilters = () => {
        setSelectedFilters({
            Especie: null,
            Tamaño: null,
            Sexo: null,
            Provincia: null
        });
        console.log("Filtros reseteados.");
    };

    return (
        <>
            {/* Botón que abre el Modal */}
            <Button variant="ghost" className="bg-white shadow-lg rounded-full z-0" onClick={() => setIsModalOpen(true)}>
                <MdTune className="text-3xl" />
            </Button>

            {/* Modal de filtros */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} placement="bottom-center" size="lg">
                <ModalContent>
                    <ModalHeader>
                        <h1 className="text-lg font-semibold">Filtros</h1>
                    </ModalHeader>
                    <ModalBody>
                        <div className="accordion flex flex-col gap-6">
                            {/* Item 1: Especie */}
                            <div className="border-b" aria-expanded={expandedIndex === 0}>
                                <div className="w-full flex flex-col text-left text-lg border-1 border-primary rounded-3xl px-5 py-2">
                                    <div className="w-full flex justify-between items-center">
                                        <span>Especie</span>
                                        <button className="w-auto" onClick={() => toggleSingleItem(0)}>
                                            {expandedIndex === 0 ? (
                                                <BiUpArrow className="text-3xl" />
                                            ) : (
                                                <BiDownArrow className="text-3xl" />
                                            )}
                                        </button>
                                    </div>
                                    <div className={`flex flex-col items-start pl-2 gap-3 overflow-y-scroll scrollbar-hide transition-max-height duration-300 ease-in-out ${expandedIndex === 0 ? 'max-h-40' : 'max-h-0'}`}>
                                        <p className="w-48 md:w-72 lg:w-96 text-base">
                                            Al seleccionar especie nos referimos a qué tipo de animal estás buscando. Si no aparece en la lista, puedes seleccionar otros.
                                        </p>
                                        <button
                                            className={`${selectedFilters.Especie === "Perro" ? "text-primary" : "text-black"}`}
                                            onClick={() => handleFilter("Especie", "Perro")}
                                        >
                                            Perro
                                        </button>
                                        <button
                                            className={`${selectedFilters.Especie === "Gato" ? "text-primary" : "text-black"}`}
                                            onClick={() => handleFilter("Especie", "Gato")}
                                        >
                                            Gato
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Item 2: Tamaño */}
                            <div className="border-b" aria-expanded={expandedIndex === 1}>
                                <div className="w-full flex flex-col text-left text-lg border-1 border-primary rounded-3xl px-5 py-2">
                                    <div className="w-full flex justify-between items-center">
                                        <span>Tamaño</span>
                                        <button className="w-auto" onClick={() => toggleSingleItem(1)}>
                                            {expandedIndex === 1 ? (
                                                <BiUpArrow className="text-3xl" />
                                            ) : (
                                                <BiDownArrow className="text-3xl" />
                                            )}
                                        </button>
                                    </div>
                                    <div className={`flex flex-col items-start pl-2 gap-3 overflow-y-scroll scrollbar-hide transition-max-height duration-300 ease-in-out ${expandedIndex === 1 ? 'max-h-40' : 'max-h-0'}`}>
                                        <p className="w-48 md:w-72 lg:w-96 text-base">
                                            Selecciona el tamaño de la mascota que estás buscando.
                                        </p>
                                        <button
                                            className={`${selectedFilters.Tamaño === "Pequeño" ? "text-primary" : "text-black"}`}
                                            onClick={() => handleFilter("Tamaño", "Pequeño")}
                                        >
                                            Pequeño
                                        </button>
                                        <button
                                            className={`${selectedFilters.Tamaño === "Mediano" ? "text-primary" : "text-black"}`}
                                            onClick={() => handleFilter("Tamaño", "Mediano")}
                                        >
                                            Mediano
                                        </button>
                                        <button
                                            className={`${selectedFilters.Tamaño === "Grande" ? "text-primary" : "text-black"}`}
                                            onClick={() => handleFilter("Tamaño", "Grande")}
                                        >
                                            Grande
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Item 3: Sexo */}
                            <div className="border-b" aria-expanded={expandedIndex === 2}>
                                <div className="w-full flex flex-col text-left text-lg border-1 border-primary rounded-3xl px-5 py-2">
                                    <div className="w-full flex justify-between items-center">
                                        <span>Sexo</span>
                                        <button className="w-auto" onClick={() => toggleSingleItem(2)}>
                                            {expandedIndex === 2 ? (
                                                <BiUpArrow className="text-3xl" />
                                            ) : (
                                                <BiDownArrow className="text-3xl" />
                                            )}
                                        </button>
                                    </div>
                                    <div className={`flex flex-col items-start pl-2 gap-3 overflow-y-scroll scrollbar-hide transition-max-height duration-300 ease-in-out ${expandedIndex === 2 ? 'max-h-40' : 'max-h-0'}`}>
                                        <p className="w-48 md:w-72 lg:w-96 text-base">
                                            Selecciona el sexo de la mascota.
                                        </p>
                                        <button
                                            className={`${selectedFilters.Sexo === "Macho" ? "text-primary" : "text-black"}`}
                                            onClick={() => handleFilter("Sexo", "Macho")}
                                        >
                                            Macho
                                        </button>
                                        <button
                                            className={`${selectedFilters.Sexo === "Hembra" ? "text-primary" : "text-black"}`}
                                            onClick={() => handleFilter("Sexo", "Hembra")}
                                        >
                                            Hembra
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Item 4: Provincia */}
                            <div className="border-b" aria-expanded={expandedIndex === 3}>
                                <div className="w-full flex flex-col text-left text-lg border-1 border-primary rounded-3xl px-5 py-2">
                                    <div className="w-full flex justify-between items-center">
                                        <span>Provincia</span>
                                        <button className="w-auto" onClick={() => toggleSingleItem(3)}>
                                            {expandedIndex === 3 ? (
                                                <BiUpArrow className="text-3xl" />
                                            ) : (
                                                <BiDownArrow className="text-3xl" />
                                            )}
                                        </button>
                                    </div>
                                    <div className={`flex flex-col items-start pl-2 gap-3 overflow-y-scroll scrollbar-default transition-max-height duration-300 ease-in-out ${expandedIndex === 3 ? 'max-h-40' : 'max-h-0'}`}>
                                        <p className="w-48 md:w-72 lg:w-96 text-base">
                                            Elige la provincia en la que te encuentras o donde estás buscando.
                                        </p>
                                        <button
                                            className={`${selectedFilters.Provincia === "Buenos Aires" ? "text-primary" : "text-black"}`}
                                            onClick={() => handleFilter("Provincia", "Buenos Aires")}
                                        >
                                            Buenos Aires
                                        </button>
                                        <button
                                            className={`${selectedFilters.Provincia === "Córdoba" ? "text-primary" : "text-black"}`}
                                            onClick={() => handleFilter("Provincia", "Córdoba")}
                                        >
                                            Córdoba
                                        </button>
                                        <button
                                            className={`${selectedFilters.Provincia === "Mendoza" ? "text-primary" : "text-black"}`}
                                            onClick={() => handleFilter("Provincia", "Mendoza")}
                                        >
                                            Mendoza
                                        </button>
                                        <button
                                            className={`${selectedFilters.Provincia === "Santa Fe" ? "text-primary" : "text-black"}`}
                                            onClick={() => handleFilter("Provincia", "Santa Fe")}
                                        >
                                            Santa Fe
                                        </button>
                                        {/* Puedes agregar más provincias aquí */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Botón para buscar */}
                        <div className="flex justify-center mt-6">
                            <Button color="primary" onClick={handleSearch}>
                                Buscar
                            </Button>
                        </div>

                        {/* Botón para limpiar filtros */}
                        <div className="flex justify-center mt-4">
                            <Button variant="ghost" onClick={handleClearFilters}>
                                Limpiar Filtros
                            </Button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
