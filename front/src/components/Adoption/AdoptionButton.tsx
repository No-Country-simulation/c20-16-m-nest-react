import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import { Tooltip } from "@nextui-org/react";

const AdoptionButton = () => {
    return (
        <Tooltip content="Agregar Adopción" placement='top-end' className='text-black text-2xl bg-white shadow-lg p-4 rounded-2xl'>
            <button className="fixed bg-primary right-2 bottom-2 md:right-8 md:bottom-8 rounded-full z-20 hover:scale-110 hover:duration-300">
                <Link href="/adoptions/adoption-form"><FaPlus className='text-5xl text-white p-2' /></Link >
            </button>
        </Tooltip>
    );
};

export default AdoptionButton;
