import Link from "next/link";

export default function HeroActions() {
  return (
    <section className="px-3 bg-[url('/images/background-report.png')] bg-cover bg-no-repeat bg-bottom w-full h-[470px] pt-[100px]">
      <article className="flex flex-col gap-y-8 justify-center text-primary mx-auto w-full max-w-[1440px]  h-full">
        <h1 className="text-4xl md:text-5xl font-semibold">Donacion</h1>
        <Link href={"#contact"} className="bg-primary py-3 px-8 rounded-full font-medium text-lg text-center text-white w-full sm:w-fit">
          Donar ahora
        </Link>
      </article>
    </section>
  );
}
