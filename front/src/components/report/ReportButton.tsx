import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const ReportButton = () => {
    return (
        <Link href="/report/reportForm">
            <button className="fixed bg-primary rounded-full shadow-lg p-2 right-2 -bottom-1 transform -translate-y-1/2 text-white text-4xl md:text-5xl z-20 hover:scale-110 hover:duration-300">
                <FaPlus />
            </button>
        </Link>
    );
};

export default ReportButton;
