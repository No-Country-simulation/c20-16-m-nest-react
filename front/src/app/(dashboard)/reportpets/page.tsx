import React from 'react';
import ReportTableProfile from '@/components/ReportPetsProfile/ReportTableProfile';
import ReportButton from '@/components/report/ReportButton';

const reportpets = () => {
  return (
    <>
      <h1 className="text-4xl text-primary font-bold my-8 w-full md:w-3/4 lg:w-2/6">
        Mis reportes
      </h1>
      <ReportTableProfile />
      <ReportButton />
    </>
  );
};

export default reportpets;
