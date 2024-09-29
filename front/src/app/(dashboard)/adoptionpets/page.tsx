import React from 'react';
import AdoptionTableProfile from '@/components/AdoptionPetsProfile/AdoptionTableProfile';
import AdoptionButton from '@/components/Adoption/AdoptionButton';

const adoptionpets = () => {
  return (
    <>
      <h1 className="text-4xl text-primary font-bold my-8 w-full md:w-3/4 lg:w-2/6">
        Mis adopciones
      </h1>
      <AdoptionTableProfile />
      <AdoptionButton />
    </>
  );
};

export default adoptionpets;
