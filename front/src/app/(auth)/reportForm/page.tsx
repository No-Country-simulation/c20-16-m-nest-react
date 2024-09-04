import FormReport from '@/components/reportForm/FormReport';
import ImgLoader from '@/components/reportForm/ImgLoader';
import Footer from '@/components/UI/Footer';
import Header from '@/components/UI/Header';

const ReportFormPage = () => {
    return (
        <div>
            <Header />
            <h1>Reportar Mascota</h1>
            <FormReport />
            <ImgLoader />
            <Footer />
        </div>
    );
};

export default ReportFormPage;
