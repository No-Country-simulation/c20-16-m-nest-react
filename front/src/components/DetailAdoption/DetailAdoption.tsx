import { BiCalendar, BiMaleSign } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdFemale } from "react-icons/io";
import { MdOutlinePets } from "react-icons/md";
import OtherData from "../ShelterUser/OtherData";
import DiseasesAnimals from "../ShelterUser/DiseasesAnimals";
import Behavior from "../ShelterUser/Behavior";
import Delivery from "../ShelterUser/Delivery";
import CardPersonUser from "../UI/CardRolUser/CardPersonUser";
import Map from "@/app/(page)/report/[id]/components/Map";
import CarouselMobileDetail from "../UI/CarouselMobileDetail/CarouselMobileDetail";

const characterAdoption: { icon: string; name: string }[] = [
  {
    icon: "animal",
    name: "Gato",
  },
  {
    icon: "male",
    name: "Macho",
  },
  {
    icon: "ubi",
    name: "Tucuman",
  },
  {
    icon: "date",
    name: "15/06/2024",
  },
];

const listOtherData: { name: string; value: string }[] = [
  { name: "Peso: ", value: "1,100kg" },
  { name: "Actividad:", value: "alta" },
  { name: "Se adopta con: ", value: "Solitario" },
];

const listBehavior: string[] = [
  "Bueno con los perros",
  "Bueno con los gatos",
  "Bueno con los niños",
  "Le gusta la compañia",
  "Cariñoso",
  "Jugueton",
];

const listDelivery: string[] = [
  "Con cartilla sanitaria",
  "Desparasitado",
  "Esterelizado",
  "Vacunado",
];

const imagesDetail: { src: string; alt: string }[] = [
  {
    src: "/images/details-adoptions-image/image-1.png",
    alt: "imagen-animal-adopcion-1",
  },
  {
    src: "/images/details-adoptions-image/image-cat-2.png",
    alt: "imagen-animal-adopcion-2",
  },
  {
    src: "/images/details-adoptions-image/image-cat-3.png",
    alt: "imagen-animal-adopcion-3",
  },
  {
    src: "/images/details-adoptions-image/image-1.png",
    alt: "imagen-animal-adopcion-4",
  },
  {
    src: "/images/details-adoptions-image/image-cat-2.png",
    alt: "imagen-animal-adopcion-5",
  },
  {
    src: "/images/details-adoptions-image/image-cat-3.png",
    alt: "imagen-animal-adopcion-6",
  },
];

export default function DetailAdoption({ idParam }: any) {
  return (
    <div className="pt-[135px] max-w-[1440px] mx-auto flex flex-col gap-y-8 pb-8 px-3">
      <section className="flex flex-col-reverse md:flex-row h-full gap-10">
        <article className="flex flex-col gap-y-5 w-full md:w-2/5 h-full ">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Gatito el adopcion
          </h1>
          <p className="font-normal text-base md:text-xl">
            Lorem ipsum dolor sit amet consectetur. Sit nullam velit sed sit
            ultricies. Non bibendum pellentesque in ut. Nec vestibulum nunc
            massa felis diam proin sagittis. Est sed massa aliquet tempor ac leo
            quis tristique sit. Ultricies lectus pharetra tempus velit quis non
            necLorem ipsum dolor sit amet consectetur. Sit nullam velit sed sit
            ultricies. Non bibendum pellentesque in ut. Nec vestibulum nunc
            massa felis diam proin sagittis. Est sed massa aliquet tempor ac leo
            quis trisLorem ipsum dolor sit amet consectetur. Sit nullam velit
            sed sit ultricies. Non bibendum pellentesque in ut. Nec vestibulum
            nunc massa felis diam proin sagittis. Est sed massa aliquet tempor
            ac leo quis tristique sit. Ultricies lectus pharetra tempus velit
            quis non nec.tique sit. Ultricies lectus pharetra tempus velit quis
            non nec..
          </p>
          <ul className="flex items-center justify-start gap-4 flex-wrap">
            {characterAdoption.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-4 px-6 py-2 rounded-full bg-primary/30 text-primary w-fit text-2xl"
              >
                {item.icon === "animal" ? (
                  <MdOutlinePets />
                ) : item.icon === "male" ? (
                  <BiMaleSign />
                ) : item.icon === "female" ? (
                  <IoMdFemale />
                ) : item.icon === "ubi" ? (
                  <FaLocationDot />
                ) : item.icon === "date" ? (
                  <BiCalendar />
                ) : (
                  ""
                )}
                <span className="text-xl font-normal">{item.name}</span>
              </li>
            ))}
            {/* <li className="flex items-center justify-center gap-4 px-6 py-2 rounded-full bg-primary/30 text-primary w-fit text-2xl">
              <MdOutlinePets />
              <span className="text-xl font-normal">Gato</span>
            </li> */}
          </ul>
        </article>
        <article className="hidden sm:grid grid-cols-3 grid-rows-3 gap-4 w-full md:w-3/5 h-[600px]">
          {imagesDetail.map((item, index) =>
            index === 1 ? (
              <img
                key={index}
                src={item.src}
                className=" object-cover col-start-3 rounded-2xl w-full h-full"
                alt={item.alt}
              />
            ) : index === 2 ? (
              <img
                key={index}
                src={item.src}
                className=" object-cover col-start-3 row-start-2 rounded-2xl w-full h-full"
                alt={item.alt}
              />
            ) : index === 3 ? (
              <img
                key={index}
                src={item.src}
                className=" object-cover col-start-3 row-start-3 rounded-2xl w-full h-full"
                alt={item.alt}
              />
            ) : index === 4 ? (
              <img
                key={index}
                src={item.src}
                className=" object-cover col-start-2 row-start-3 rounded-2xl w-full h-full"
                alt={item.alt}
              />
            ) : index === 5 ? (
              <img
                key={index}
                src={item.src}
                className=" object-cover col-start-1 row-start-3 rounded-2xl w-full h-full"
                alt={item.alt}
              />
            ) : (
              <img
                key={index}
                src={item.src}
                className=" object-cover col-span-2 row-span-2 rounded-2xl w-full h-full"
                alt={item.alt}
              />
            )
          )}
        </article>
        <CarouselMobileDetail list={imagesDetail} />
      </section>
      <section className="flex flex-col-reverse md:flex-row gap-y-5 gap-x-10 h-full w-full">
        <article className="w-full md:w-2/5 h-full flex flex-col gap-y-8">
          <DiseasesAnimals
            title="Enfermedades"
            description="Pipo nacio con una condicion cardiologica, tiene un soplo al
            corazon. puede hacer vida normal pero una vez al año hay que
            llevarlo a hacerse estudios del corazon."
          />
          <OtherData list={listOtherData} />
          <Behavior list={listBehavior} />
          <Delivery list={listDelivery} />
          <button className="bg-primary py-3 px-8 rounded-full font-medium text-lg text-white w-full lg:w-fit">
            Consultar
          </button>
        </article>
        <article className="w-full md:w-3/5 h-full flex flex-col gap-y-8">
          <div className=" flex items-center gap-x-6">
            <img
              src="/images/profile-picture.png"
              className="rounded-full size-32 border-2 border-primary"
              alt="imagen-perfilDeUsuario"
            />
            <div className="flex flex-col gap-y-1">
              <h3 className="flex text-xl font-normal">Alvertito007</h3>
              <CardPersonUser />
            </div>
          </div>
          <Map />
        </article>
      </section>
    </div>
  );
}
