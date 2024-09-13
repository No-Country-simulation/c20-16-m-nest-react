import FormShelter from "@/components/ShelterUser/FormShelter";

export default function shelteruser() {
  return (
    <div className=" flex flex-col gap-y-10">
      <section className=" flex flex-col gap-y-8">
        <h2 className="text-4xl font-semibold text-primary">Ser refugio</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          aspernatur? Accusamus nam fuga perferendis vero culpa facere at
          provident quos saepe reiciendis, voluptates ea quia illum architecto
          ipsam magni similique? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Culpa, aspernatur? Accusamus nam fuga perferendis
          vero culpa facere at provident quos saepe reiciendis, voluptates ea
          quia illum architecto ipsam magni similique?
        </p>
        <article className=" flex ">
          <div className=" flex items-center justify-center gap-x-3 px-4 py-2 rounded-full bg-secondary-v3/30 w-fit">
            <div className="size-2 bg-secondary-v3 rounded-full"></div>
            {/* circulo */}
            <span className=" text-secondary-v3 text-base font-normal">
              Persona
            </span>
          </div>
          <div className=" flex items-center justify-center gap-x-3 px-4 py-2 rounded-full bg-accent/30 w-fit">
            <div className="size-2 bg-accent rounded-full"></div>
            {/* circulo */}
            <span className=" text-accent text-base font-normal">Refugio</span>
          </div>
        </article>
      </section>
      <FormShelter />
    </div>
  );
}
