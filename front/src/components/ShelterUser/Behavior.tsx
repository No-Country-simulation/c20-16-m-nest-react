import { GrStatusGood } from "react-icons/gr";

export default function Behavior({ list }: { list: string[] }) {
  return (
    <div className=" flex flex-col gap-y-5">
      <h2 className="font-semibold text-2xl">Comportamiento</h2>
      <ul className=" flex items-center flex-wrap gap-3">
        {list.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center gap-x-2 rounded-lg px-3 py-2 bg-primary text-white w-fit"
          >
            <GrStatusGood className="text-xl"/>
            <h3 className="text-base font-normal ">{item}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
