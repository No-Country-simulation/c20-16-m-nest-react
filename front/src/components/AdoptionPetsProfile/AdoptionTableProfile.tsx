"use client"
import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import AdoptionItemProfileActions from './AdoptionItemProfileActions';

interface AdoptionProfile {
    id: number;
    title: string;
    species: string;
    location: string;
    sex: string;
    imageUrl: string;
}

const AdoptionTableProfile: React.FC = () => {
    const [adoptions, setAdoptions] = useState<AdoptionProfile[]>([
        {
            id: 1,
            title: 'Perro con estilo en adopción',
            species: 'Perro',
            location: 'Buenos Aires, Junín',
            sex: 'Macho',
            imageUrl: './images/image-collage-5.png',
        },
        {
            id: 2,
            title: 'Gato en adopción',
            species: 'Gato',
            location: 'Buenos Aires, Pilar',
            sex: 'Hembra',
            imageUrl: './images/image-collage-1.png',
        },
        {
            id: 3,
            title: 'Perrita en adopción',
            species: 'Perro',
            location: 'Buenos Aires, Pilar',
            sex: 'Hembra',
            imageUrl: './images/reports/dog2.jpg',
        },

    ]);

    const handleEdit = (id: number) => {
        console.log('Edit adoption id:', id);
    };

    const handleShare = (id: number) => {
        console.log('Share adoption id:', id);
    };

    const handleDelete = (id: number) => {
        setAdoptions(adoptions.filter((adoption) => adoption.id !== id));
    };

    return (
        <Table
            color="primary"
            selectionMode="single"
            aria-label="Lista de adopciones">
            <TableHeader>
                <TableColumn>Imagen</TableColumn>
                <TableColumn>Adopciones</TableColumn>
                <TableColumn className="hidden md:table-cell">Especie</TableColumn>
                <TableColumn className="hidden lg:table-cell">Ubicación</TableColumn>
                <TableColumn className="hidden md:table-cell">Sexo</TableColumn>
                <TableColumn>Acciones</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No hay adopciones que mostrar, agrega una para ver."}>
                {adoptions.map((adoption) => (
                    <TableRow key={adoption.id}>
                        <TableCell>
                            <img src={adoption.imageUrl} alt={adoption.title} className='w-12 h-12 rounded-2xl object-cover' />
                        </TableCell>
                        <TableCell>{adoption.title}</TableCell>
                        <TableCell className="hidden md:table-cell">{adoption.species}</TableCell>
                        <TableCell className="hidden lg:table-cell">{adoption.location}</TableCell>
                        <TableCell className="hidden md:table-cell">{adoption.sex}</TableCell>
                        <TableCell>
                            <AdoptionItemProfileActions
                                adoption={adoption}
                                onEdit={handleEdit}
                                onShare={handleShare}
                                onDelete={handleDelete}
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default AdoptionTableProfile;