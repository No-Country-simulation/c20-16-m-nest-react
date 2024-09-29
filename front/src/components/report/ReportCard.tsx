import React from 'react';
import { ReportCardProps } from '@/interfaces/ReportCard';
import { FaMapMarkerAlt, FaPaw } from 'react-icons/fa';

export const ReportCard: React.FC<ReportCardProps> = ({ title, description, images, species, sex, location }) => {
    console.log(images);
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-md bg-white text-black">
            <img className="w-full h-64 object-cover" src={images?.urls[0]} alt={title} />
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl md:text-2xl mb-2">{title}</h2>
                <p className="text-base ">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 bg-accent rounded-full p-2 text-white text-4xl" />
                    <span className='text-sm font-medium '>{location.locality}, {location.province} </span>
                </div>
                <div className="flex items-center">
                    <FaPaw className="mr-2 bg-accent rounded-full p-2 text-white text-4xl" />
                    <span className='text-sm font-medium'>{species === 'Perro' ? 'Perro' : 'Gato'} / {sex}</span>
                </div>
            </div>
        </div>
    );
};
