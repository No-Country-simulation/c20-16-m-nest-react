"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import ImageUploader from "@/components/ImageUploader";
import { Checkbox } from "@nextui-org/checkbox";
import { useForm, FormProvider } from "react-hook-form";

export default function AdoptionFormPage() {
  const methods = useForm();

  return (
    <main className="flex flex-col gap-8 pt-32 pb-48 px-4 md:px-20">
      <h1 className="text-2xl md:text-3xl text-primary font-semibold">
        Formulario de adopción
      </h1>
      <section>
        <h1 className="mb-2 text-lg md:text-xl font-[500]">
          Datos obligatorios
        </h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Nombre" />
          <Input label="Especie" />
          <Input label="Fecha de nacimiento" />
          <Input label="Sexo" />
          <Input label="Edad" />
          <Input label="Provincia" />
          <Textarea label="Historia" className="md:col-span-2" />
        </form>
      </section>

      <section className="h-[450px]">
        <h2 className="mb-2 text-lg md:text-xl font-[500]">Fotos</h2>
        <div className="max-w-md h-[200px]">
          <FormProvider {...methods}>
            <ImageUploader />
          </FormProvider>
        </div>
      </section>

      <section>
        <h1 className="mb-2 text-lg md:text-xl font-[500]">Comportamiento</h1>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Checkbox>Bueno con perros</Checkbox>
          <Checkbox>Bueno con gatos</Checkbox>
          <Checkbox>Escapista</Checkbox>
          <Checkbox>Le gusta estar en compañia</Checkbox>
          <Checkbox>Protector</Checkbox>
          <Checkbox>Bueno con niños</Checkbox>
          <Checkbox>Bueno con el coche</Checkbox>
          <Checkbox>Independiente</Checkbox>
          <Checkbox>Le gusta pasear</Checkbox>
          <Checkbox>Timido</Checkbox>
          <Checkbox>Bueno con otros animales</Checkbox>
          <Checkbox>Cariñoso</Checkbox>
          <Checkbox>Jugeton</Checkbox>
          <Checkbox>Obediente</Checkbox>
          <Checkbox>Buen temperamento</Checkbox>
        </form>
      </section>
      <section>
        <h1 className="mb-2 text-lg md:text-xl font-[500]">Como se entrega</h1>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Checkbox>Con cartilla sanitaria</Checkbox>
          <Checkbox>Desparasitado</Checkbox>
          <Checkbox>Microchip</Checkbox>
          <Checkbox>Esterilizado</Checkbox>
          <Checkbox>Vacunado</Checkbox>
        </form>
      </section>
      <div className="flex justify-end">
        <Button className="w-32 bg-secondary-v2 text-white" variant="flat">
          Publicar
        </Button>
      </div>
    </main>
  );
}
