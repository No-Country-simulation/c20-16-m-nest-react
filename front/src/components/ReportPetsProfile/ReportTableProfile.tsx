"use client"
import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import ReportItemProfileActions from './ReportItemProfileActions';

interface ReportProfile {
    id: number;
    title: string;
    species: string;
    location: string;
    sex: string;
    imageUrl: string;
}
// ejemplos
const ReportTableProfile: React.FC = () => {
    const [reports, setReports] = useState<ReportProfile[]>([
        {
            id: 1,
            title: 'Perro perdido en Junín',
            species: 'Perro',
            location: 'Buenos Aires, Junín',
            sex: 'Macho',
            imageUrl: './images/image-collage-5.png',
        },
        {
            id: 2,
            title: 'Gato perdido',
            species: 'Gato',
            location: 'Buenos Aires, Pilar',
            sex: 'Hembra',
            imageUrl: './images/image-collage-1.png',
        },
    ]);

    const handleEdit = (id: number) => {
        console.log('Edit report id:', id);
    };

    const handleShare = (id: number) => {
        console.log('Share report id:', id);
    };

    const handleDelete = (id: number) => {
        setReports(reports.filter((report) => report.id !== id));
    };

    return (
        <Table
            color="primary"
            selectionMode="single"
            aria-label="Lista de reportes">
            <TableHeader>
                <TableColumn>Imagen</TableColumn>
                <TableColumn>Reportes</TableColumn>
                <TableColumn className="hidden md:table-cell">Especie</TableColumn>
                <TableColumn className="hidden lg:table-cell">Ubicación</TableColumn>
                <TableColumn className="hidden md:table-cell">Sexo</TableColumn>
                <TableColumn>Acciones</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No hay reportes que mostrar, agrega uno para ver."}>
                {reports.map((report) => (
                    <TableRow key={report.id}>
                        <TableCell>
                            <img src={report.imageUrl} alt={report.title} className='w-12 h-12 rounded-2xl object-cover' />
                        </TableCell>
                        <TableCell>{report.title}</TableCell>
                        <TableCell className="hidden md:table-cell">{report.species}</TableCell>
                        <TableCell className="hidden lg:table-cell">{report.location}</TableCell>
                        <TableCell className="hidden md:table-cell">{report.sex}</TableCell>
                        <TableCell>
                            <ReportItemProfileActions
                                report={report}
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

export default ReportTableProfile;
