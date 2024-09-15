interface Diseases {
  title: string;
  description: string;
}
export default function DiseasesAnimals({ title, description }: Diseases) {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className=" font-semibold text-2xl">{title}</h2>
      <p className="text-xl font-normal">{description}</p>
    </div>
  );
}
