import React from 'react';
import { Button, Tooltip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';
import { HiDotsVertical } from 'react-icons/hi';

interface AdoptionProfile {
    id: number;
    title: string;
    species: string;
    location: string;
    sex: string;
    imageUrl: string;
}

interface AdoptionItemProfileActionsProps {
    adoption: AdoptionProfile;
    onEdit: (id: number) => void;
    onShare: (id: number) => void;
    onDelete: (id: number) => void;
}

const AdoptionItemProfileActions: React.FC<AdoptionItemProfileActionsProps> = ({ adoption, onEdit, onShare, onDelete }) => {
    return (
        <div className="flex items-center justify-end">
            <div className="hidden sm:flex items-center gap-2">
                <Tooltip content="Editar adopción">
                    <button className='bg-primary text-white text-lg p-2 rounded-lg' onClick={() => onEdit(adoption.id)}>
                        <BiEdit />
                    </button>
                </Tooltip>
                <Tooltip content="Compartir adopción">
                    <button className='bg-primary text-white text-lg p-2 rounded-lg' onClick={() => onShare(adoption.id)} >
                        <AiOutlineLink />
                    </button>
                </Tooltip>
                <Tooltip content="Eliminar adopción">
                    <button className='bg-primary text-white text-lg p-2 rounded-lg' onClick={() => onDelete(adoption.id)} >
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
                    <DropdownMenu aria-label="Acciones de adopción">
                        <DropdownItem key="edit" onPress={() => onEdit(adoption.id)}>
                            <span className='flex flex-row justify-start items-center gap-2'><BiEdit className='bg-primary text-white text-xl p-1' />Editar</span>
                        </DropdownItem>
                        <DropdownItem key="share" onPress={() => onShare(adoption.id)}>
                            <span className='flex flex-row justify-start items-center gap-2'><AiOutlineLink className='bg-primary text-white text-xl p-1' />Compartir</span>
                        </DropdownItem>
                        <DropdownItem key="delete" className="text-danger" color="danger" onPress={() => onDelete(adoption.id)}>
                            <span className='flex flex-row justify-start items-center gap-2'><FiTrash className='bg-primary text-white text-xl p-1 rounded-sm' />Eliminar</span>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
};

export default AdoptionItemProfileActions;