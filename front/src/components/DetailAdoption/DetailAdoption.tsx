import { BiCalendar, BiMaleSign } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdFemale } from "react-icons/io";
import { MdOutlinePets } from "react-icons/md";
import OtherData from "../ShelterUser/OtherData";
import DiseasesAnimals from "../ShelterUser/DiseasesAnimals";
import Behavior from "../ShelterUser/Behavior";
import Delivery from "../ShelterUser/Delivery";

const characterAdoption = [
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

export default function DetailAdoption({ idParam }: any) {
  return (
    <div className="pt-[115px] max-w-[1440px] mx-auto">
      <section className="flex  h-full gap-x-10">
        <article className="flex flex-col gap-y-5 w-2/5 h-full ">
          <h1 className="text-4xl font-semibold">Gatito el adopcion</h1>
          <p className="font-normal text-xl">
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
        <article className="grid gap-4 w-3/5 h-full">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
              alt=""
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                alt=""
              />
            </div>
          </div>
        </article>
      </section>
      <section className="flex flex-col gap-y-5 h-full w-full">
        <article className="w-2/5 h-full">
          <DiseasesAnimals
            title="Enfermedades"
            description="Pipo nacio con una condicion cardiologica, tiene un soplo al
            corazon. puede hacer vida normal pero una vez al año hay que
            llevarlo a hacerse estudios del corazon."
          />
          <OtherData list={listOtherData} />
          <Behavior />
          <Delivery title="Con catilla sanitaria" />
        </article>
        <article className="w-3/5 h-full"></article>
      </section>
    </div>
  );
}
