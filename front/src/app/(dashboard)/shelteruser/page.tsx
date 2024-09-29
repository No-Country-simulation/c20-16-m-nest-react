import FormShelter from "@/components/ShelterUser/FormShelter";
import CardPersonUser from "@/components/UI/CardRolUser/CardPersonUser";
import CardShelterUser from "@/components/UI/CardRolUser/CardShelterUser";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";

export default function shelteruser() {
  return (
    <div className=" flex flex-col gap-y-10">
      <section className=" flex flex-col gap-y-8">
        <h2 className="text-4xl font-semibold text-primary">Ser refugio</h2>
        <p className="text-base sm:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          aspernatur? Accusamus nam fuga perferendis vero culpa facere at
          provident quos saepe reiciendis, voluptates ea quia illum architecto
          ipsam magni similique? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Culpa, aspernatur? Accusamus nam fuga perferendis
          vero culpa facere at provident quos saepe reiciendis, voluptates ea
          quia illum architecto ipsam magni similique?
        </p>
        <article className="flex flex-col sm:flex-row items-center gap-4">
          <CardPersonUser />
          <FaArrowRightLong className="hidden sm:block text-3xl" />
          <FaArrowDownLong className="block sm:hidden text-3xl" />
          <CardShelterUser />
        </article>
      </section>
      <FormShelter />
    </div>
  );
}
