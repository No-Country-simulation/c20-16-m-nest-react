import FormLogin from "@/components/login/FormLogin";

export default function login() {
  return (
    <main className="w-full min-h-screen flex justify-center md:justify-start items-center max-w-[1440px] mx-auto">
      <section className="w-full max-w-md h-fit flex flex-col items-start gap-y-8 bg-white rounded-2xl p-4 md:bg-transparent">
        <h1 className="w-full md:text-left text-center text-2xl sx:text-5xl text-primary font-semibold">
          Iniciar Sesion
        </h1>
        <FormLogin />
      </section>
      <img
        src="/svg/background-login-animals.svg"
        className=" max-w-[474px] max-h-[345px] sm:max-w-[574px] sm:max-h-[445px] absolute bottom-0 right-0 sm:right-28 -z-40"
        alt="Mascotas login"
      />
      <img
        src="/svg/background-login-register.svg"
        className="absolute top-0 right-0 w-full max-w-fit h-full object-cover -z-50 "
        alt="fondo-login"
      />
    </main>
  );
}
