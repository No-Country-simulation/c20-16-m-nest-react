import { GrStatusGood } from "react-icons/gr";

export default function Delivery({ title }: { title: string }) {
  return (
    <div>
      <h2 className=" font-semibold text-2xl">Como se entrega </h2>
      <ul>
        <li className="flex items-center justify-center gap-x-2 rounded-lg px-3 py-2 bg-secondary-v3 text-white w-fit">
          <GrStatusGood />
          <h3 className="text-base font-normal ">{title}</h3>
        </li>
      </ul>
    </div>
  );
}
