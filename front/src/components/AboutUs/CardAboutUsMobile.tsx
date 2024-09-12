import { AboutmeData } from "@/interfaces/AboutmeData";

interface AboutUsData extends AboutmeData {
  classValue: string;
}

export default function CardAboutUsMobile({
  icon,
  classValue,
  title,
  classText,
  description,
}: AboutUsData) {
  return (
    <li
      className={`flex gap-4 items-center w-fit max-w-[350px] ${classValue} `}
    >
      <div className="p-6 bg-secondary-v3 rounded-full md:p-8 shadow-md">
        {icon}
      </div>
      <div>
        <h4 className={`font-semibold text-lg ${classText}`}>{title}</h4>
        <p className={`text-base font-normal ${classText}`}>{description}</p>
      </div>
    </li>
  );
}
