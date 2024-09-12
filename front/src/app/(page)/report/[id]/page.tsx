import Image from "next/image";
import { FaLocationDot, FaPaw } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import Form from "./components/Form";
import Map from "./components/Map";
import Images from "./components/Images";

export default function SpecificReportPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex flex-col gap-4 pt-20 pb-8 min-h-screen px-4">
      <Images />
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="relative size-40">
            <Image
              src="/images/profile-picture.png"
              fill
              alt="profile picture"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-xl">pablicoLesca445</h3>
            <div className="flex items-center justify-start p-2 pr-6 w-min rounded-full bg-secondary-v3 bg-opacity-30 text-secondary-v3">
              <LuDot className="text-2xl" />
              <span>Persona</span>
            </div>
          </div>
        </div>

        <div className="p-2 rounded-lg bg-[#232323] bg-opacity-10">
          <span>Casos reportados 1</span>
        </div>
      </section>
      <section>
        <h3 className="text-2xl">Perro perdido en la plaza</h3>
        <div className="flex items-center mb-4 gap-1 text-lg font-light">
          <FaLocationDot className="text-primary" />
          <h2>Av. 9 de Julio</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sit nullam velit sed sit
          ultricies. Non bibendum pellentesque in ut. Nec vestibulum nunc massa
          felis diam proin sagittis. Est sed massa aliquet tempor ac leo quis
          tristique sit. Ultricies lectus pharetra tempus velit quis non
          necLorem ipsum dolor sit amet consectetur. Sit nullam velit sed sit
          ultricies. Non bibendum pellentesque in ut. Nec vestibulum nunc massa
          felis diam proin sagittis. Est sed massa aliquet tempor ac leo quis
          trisLorem ipsum dolor sit amet consectetur. Sit nullam velit sed sit
          ultricies. Non bibendum pellentesque in ut. Nec vestibulum nunc massa
          felis diam proin sagittis. Est sed massa aliquet tempor ac leo quis
          tristique sit. Ultricies lectus pharetra tempus velit quis non
          nec.tique sit. Ultricies lectus pharetra tempus velit quis non nec..
        </p>
      </section>
      <section className="flex justify-center gap-4">
        <div className="flex flex-col items-center py-5 px-7 w-min rounded-lg text-lg truncate bg-primary bg-opacity-30 text-primary">
          <FaPaw />
          <span>Gato</span>
        </div>
        <div className="flex flex-col items-center py-5 px-7 w-min rounded-lg text-lg truncate bg-primary bg-opacity-30 text-primary">
          <FaPaw />
          <span>Macho</span>
        </div>
        <div className="flex flex-col items-center py-5 px-7 w-min rounded-lg text-lg truncate bg-primary bg-opacity-30 text-primary">
          <FaPaw />
          <span>Bs. As.</span>
        </div>
      </section>
      <Map />
      <Form />
    </div>
  );
}
