import React from 'react';
import { Button, Tooltip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';
import { HiDotsVertical } from 'react-icons/hi';

interface ReportProfile {
    id: number;
    title: string;
    species: string;
    location: string;
    sex: string;
    imageUrl: string;
}

interface ReportItemProfileActionsProps {
    report: ReportProfile;
    onEdit: (id: number) => void;
    onShare: (id: number) => void;
    onDelete: (id: number) => void;
}

const ReportItemProfileActions: React.FC<ReportItemProfileActionsProps> = ({ report, onEdit, onShare, onDelete }) => {
    return (
        <div className="flex items-center justify-end">
            <div className="hidden sm:flex items-center gap-2">
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

            <div className="sm:hidden">
                <Dropdown>
                    <DropdownTrigger>
                        <Button isIconOnly size="sm" variant="light">
                            <HiDotsVertical className="text-xl" />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Acciones del reporte">
                        <DropdownItem key="edit" onPress={() => onEdit(report.id)}>
                            <span className='flex flex-row justify-start items-center gap-2'><BiEdit className='bg-primary text-white text-xl p-1' />Editar</span>
                        </DropdownItem>
                        <DropdownItem key="share" onPress={() => onShare(report.id)}>
                            <span className='flex flex-row justify-start items-center gap-2'><AiOutlineLink className='bg-primary text-white text-xl p-1' />Compartir</span>
                        </DropdownItem>
                        <DropdownItem key="delete" className="text-danger" color="danger" onPress={() => onDelete(report.id)}>
                            <span className='flex flex-row justify-start items-center gap-2'><FiTrash className='bg-primary text-white text-xl p-1 rounded-sm' />Eliminar</span>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
};

export default ReportItemProfileActions;