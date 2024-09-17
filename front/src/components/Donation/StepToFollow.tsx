import { GiDogHouse } from "react-icons/gi";
import { TbDogBowl } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
interface DonationPass {
  icon: string;
  title: string;
  description: string;
  style: string;
}

export default function StepToFollow({ list }: { list: DonationPass[] }) {
  return (
    <section className="px-3 flex flex-col gap-y-6 mx-auto w-full max-w-[1440px] pt-12">
      <h2 className="text-4xl font-semibold text-primary">¿Como donar?</h2>
      <ul className="flex gap-4 w-full max-h-[360px]">
        {list.map((item, index) => (
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
  );
}
