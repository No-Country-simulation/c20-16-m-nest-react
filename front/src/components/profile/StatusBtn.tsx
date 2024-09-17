import React from 'react';

interface StatusTagProps {
    status: 'Persona' | 'Veterinaria';
}

const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
    const getColorClass = (status: StatusTagProps['status']) => {
        switch (status) {
            case 'Persona':
                return {
                    circleColor: 'bg-secondary-v3',
                    textColor: 'text-secondary-v3',
                    backgroundColor: 'bg-secondary-v3light'
                };
            case 'Veterinaria':
                return {
                    circleColor: 'bg-green-600',
                    textColor: 'text-green-600',
                    backgroundColor: 'bg-green-100'
                };
            default:
                return {
                    circleColor: 'bg-gray-600',
                    textColor: 'text-gray-600',
                    backgroundColor: 'bg-gray-100'
                };
        }
    };

    const { circleColor, textColor, backgroundColor } = getColorClass(status);

    return (
        <div className={`w-2/3 md:w-1/2 flex items-center justify-center gap-1.5 md:gap-3 rounded-full py-2 ${backgroundColor}`}>
            <span className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${circleColor}`}></span>
            <span className={`${textColor} text-sm md:text-base`}>{status}</span>
        </div>
    );
};

export default StatusTag;
