import React from 'react';
import { Button, Tooltip } from '@nextui-org/react';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';

interface ReportItemProfileProps {
    report: {
        id: number;
        title: string;
        species: string;
        location: string;
        sex: string;
        imageUrl: string;
    };
    onEdit: (id: number) => void;
    onShare: (id: number) => void;
    onDelete: (id: number) => void;
}

const ReportItemProfileActions: React.FC<ReportItemProfileProps> = ({ report, onEdit, onShare, onDelete }) => {
    return (
        <div className="flex items-center gap-2">
            <Tooltip content="Editar reporte">
                <button className='bg-primary text-white text-lg p-2 rounded-lg' onClick={() => onEdit(report.id)}>
                    <BiEdit />
                </button>
            </Tooltip>
            <Tooltip content="Compartir reporte">
                <button className='bg-primary text-white text-lg p-2 rounded-lg' onClick={() => onShare(report.id)} >
                    <AiOutlineLink />
                </button>
            </Tooltip>
            <Tooltip content="Eliminar reporte">
                <button className='bg-primary text-white text-lg p-2 rounded-lg' onClick={() => onDelete(report.id)} >
                    <FiTrash />
                </button>
            </Tooltip>
        </div>
    );
};

export default ReportItemProfileActions;
