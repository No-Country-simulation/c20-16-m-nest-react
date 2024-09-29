import { Services } from "@/interfaces/Services";

export default function CardServices({
  bgIcon,
  icon,
  title,
  description,
}: Services) {
  return (
    <li className=" flex gap-x-5">
      <div
        className={`rounded-2xl ${bgIcon} w-[144px] h-[115px] flex items-center justify-center`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-y-3 max-w-[160px]">
        <h4 className=" font-semibold text-2xl">{title} </h4>
        <p className=" font-normal text-base">{description}</p>
      </div>
    </li>
  );
}
