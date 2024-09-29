"use client";

import { Modal, ModalContent, ModalHeader, ModalBody, Button } from "@nextui-org/react";
import { MdTune } from "react-icons/md";
import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

interface AdoptionFilterBtnProps {
    onApplyFilters: (filters: {
        species: string[];
        size: string[];
        sex: string[];
        province: string[];
    }) => void;
}

export default function AdoptionFilterBtn({ onApplyFilters }: AdoptionFilterBtnProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [selectedFilters, setSelectedFilters] = useState<{
        species: string[];
        size: string[];
        sex: string[];
        province: string[];
    }>({
        species: [],
        size: [],
        sex: [],
        province: []
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleSingleItem = (index: number) => {
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const handleFilter = (category: keyof typeof selectedFilters, filter: string) => {
        setSelectedFilters(prevFilters => {
            const updatedCategory = prevFilters[category].includes(filter)
                ? prevFilters[category].filter(item => item !== filter)
                : [...prevFilters[category], filter];
            return { ...prevFilters, [category]: updatedCategory };
        });
    };

    const handleSearch = () => {
        console.log("Búsqueda realizada con los filtros:", selectedFilters);
        onApplyFilters(selectedFilters);
        setIsModalOpen(false);
    };

    const handleClearFilters = () => {
        setSelectedFilters({
            species: [],
            size: [],
            sex: [],
            province: []
        });
    };

    const filterOptions: Record<keyof typeof selectedFilters, string[]> = {
        species: ["Perro", "Gato"],
        size: ["Pequeño", "Mediano", "Grande"],
        sex: ["Macho", "Hembra"],
        province: ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"]
    };

    return (
        <>
            <Button variant="ghost" className="bg-white shadow-lg rounded-full z-0" onClick={() => setIsModalOpen(true)}>
                <MdTune className="text-3xl" />
            </Button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} placement="bottom-center" size="lg">
                <ModalContent>
                    <ModalHeader>
                        <div className="w-full flex justify-center">
                            <h1 className="text-lg font-semibold">Búsqueda Avanzada</h1>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="accordion flex flex-col gap-6">
                            {Object.entries(filterOptions).map(([category, options], index) => (
                                <div key={category} className="border-b" aria-expanded={expandedIndex === index}>
                                    <div className="w-full flex flex-col text-left text-lg border-1 border-primary rounded-3xl px-5 py-2">
                                        <div className="w-full flex justify-between items-center">
                                            <span>{{
                                                species: 'Especie',
                                                size: 'Tamaño',
                                                sex: 'Sexo',
                                                province: 'Provincia'
                                            }[category]}</span>
                                            <button className="w-auto" onClick={() => toggleSingleItem(index)}>
                                                {expandedIndex === index ? (
                                                    <BiUpArrow className="text-3xl" />
                                                ) : (
                                                    <BiDownArrow className="text-3xl" />
                                                )}
                                            </button>
                                        </div>
                                        <div className={`flex flex-col items-start pl-2 gap-3 overflow-y-scroll scrollbar-hide transition-max-height duration-300 ease-in-out ${expandedIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                                            {options.map((option) => (
                                                <button
                                                    key={option}
                                                    className={`${selectedFilters[category as keyof typeof selectedFilters].includes(option) ? "text-primary" : "text-black"}`}
                                                    onClick={() => handleFilter(category as keyof typeof selectedFilters, option)}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-6">
                            <Button color="primary" onClick={handleSearch}>
                                Buscar
                            </Button>
                        </div>

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