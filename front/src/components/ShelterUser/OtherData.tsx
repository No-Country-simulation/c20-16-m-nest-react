export default function OtherData({
  list,
}: {
  list: { name: string; value: string }[];
}) {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className=" font-semibold text-2xl">Otros Datos </h2>
      <ul className="flex items-center gap-x-4">
        {list.map((item, index) => (
          <li key={index} className=" flex flex-col gap-y-1 ">
            <h3 className=" text-base font-normal ">{item.name}</h3>
            <div className="rounded-lg py-2 px-3 text-base font-normal bg-secondary-v1 text-white w-fit">
              {item.value}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
