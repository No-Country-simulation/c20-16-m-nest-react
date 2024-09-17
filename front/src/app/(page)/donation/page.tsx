import { GiDogHouse } from "react-icons/gi";
import { TbDogBowl } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";

interface DonationPass {
  icon: string;
  title: string;
  description: string;
  style: string;
}

const listDonationPass: DonationPass[] = [
  {
    icon: "form",
    title: "Completar formulario",
    description: `Lorem ipsum dolor sit amet consectetur. Ac urna eget magna in
              sodales eu sit tristique. Sed convallis rutrum orci sed ultrices
              blandit urna tincidunt. Augue iaculis amet ipsum malesuada odio
              nulla ullamcorper. Donec viverra vulputate mauris felis sit sit
              diam bibendum tortor.`,
    style: "bg-accent",
  },
  {
    icon: "selec",
    title: "Seleciona",
    description: `Lorem ipsum dolor sit amet consectetur. Ac urna eget magna in
              sodales eu sit tristique. Sed convallis rutrum orci sed ultrices
              blandit urna tincidunt. Augue iaculis amet ipsum malesuada odio
              nulla ullamcorper. Donec viverra vulputate mauris felis sit sit
              diam bibendum tortor.`,
    style: "bg-secondary-v1",
  },
  {
    icon: "done",
    title: "Dona",
    description: `Lorem ipsum dolor sit amet consectetur. Ac urna eget magna in
              sodales eu sit tristique. Sed convallis rutrum orci sed ultrices
              blandit urna tincidunt. Augue iaculis amet ipsum malesuada odio
              nulla ullamcorper. Donec viverra vulputate mauris felis sit sit
              diam bibendum tortor.`,
    style: "bg-secondary-v3",
  },
];

export default function Donation() {
  return (
    <div className=" w-full  h-full ">
      <section className=" bg-[url('/images/background-report.png')] bg-cover bg-no-repeat bg-bottom w-full h-[470px] pt-[100px]">
        <article className="flex flex-col gap-y-8 justify-center text-primary mx-auto w-full max-w-[1440px]  h-full">
          <h1 className="text-5xl font-semibold">Donacion</h1>
          <button className="bg-primary py-3 px-8 rounded-full font-medium text-lg text-white w-full lg:w-fit">
            Donar ahora
          </button>
        </article>
      </section>
      <section className="flex gap-6 pt-12 w-full mx-auto max-w-[1440px]">
        <article className="flex flex-col gap-y-5 items-center w-1/2">
          <h2 className="text-4xl font-semibold text-primary">
            ¿Quiemes somos?
          </h2>
          <p className=" text-xl font-normal text-center">
            Lorem ipsum dolor sit amet consectetur. Id ut semper ullamcorper
            risus magna euismod ultrices est eu. Vel odio aliquam quisque eget
            ullamcorper nunc mauris. Non dictum purus accumsan dolor faucibus
            mauris. Quam metus ullamcorper dictum in. Quisque in pharetra arcu
            urna pretium. Netus erat ut vitae amet felis enim. Mattis sit
            malesuada feugiat ut elementum rutrum sed erat. Morbi arcu ut
            commodo dictum. Mus a nibh et sagittis vitae.
          </p>
        </article>
        <article className="flex flex-col gap-y-5 items-center w-1/2">
          <h2 className="text-4xl font-semibold text-primary">
            ¿Quiemes somos?
          </h2>
          <p className=" text-xl font-normal text-center">
            Lorem ipsum dolor sit amet consectetur. Id ut semper ullamcorper
            risus magna euismod ultrices est eu. Vel odio aliquam quisque eget
            ullamcorper nunc mauris. Non dictum purus accumsan dolor faucibus
            mauris. Quam metus ullamcorper dictum in. Quisque in pharetra arcu
            urna pretium. Netus erat ut vitae amet felis enim. Mattis sit
            malesuada feugiat ut elementum rutrum sed erat. Morbi arcu ut
            commodo dictum. Mus a nibh et sagittis vitae.
          </p>
        </article>
      </section>
      <section className=" flex flex-col gap-y-6 mx-auto w-full max-w-[1440px] pt-12">
        <h2 className="text-4xl font-semibold text-primary">¿Como donar?</h2>
        <ul className="flex gap-4 w-full max-h-[360px]">
          {listDonationPass.map((item, index) => (
            <li
              key={index}
              className=" flex flex-col items-center gap-y-5 w-1/3 shadow-md px-2 py-3 rounded-2xl"
            >
              <div className=" flex flex-col gap-y-3 items-center">
                <div
                  className={`p-8 rounded-full ${item.style} text-white w-fit`}
                >
                  {item.icon === "form" ? (
                    <TfiWrite className="text-7xl" />
                  ) : item.icon === "selec" ? (
                    <GiDogHouse className="text-7xl" />
                  ) : (
                    <TbDogBowl className="text-7xl" />
                  )}
                </div>
                <h3 className="text-2xl font-medium text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="text-center text-base font-normal">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <article>
            <h2>Donacion</h2>
            <form action="">
                
            </form>
        </article>
      </section>
    </div>
  );
}
