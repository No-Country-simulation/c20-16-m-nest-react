import { GrStatusGood } from "react-icons/gr";

export default function Behavior() {
  return (
    <div className=" flex flex-col">
      <h2 className="font-semibold text-2xl">Comportamiento</h2>
      <ul>
        <li className="flex items-center justify-center gap-x-2 rounded-lg px-3 py-2 bg-primary text-white w-fit">
          <GrStatusGood />
          <h3 className="text-base font-normal ">Bueno con los perros</h3>
        </li>
      </ul>
    </div>
  );
}
