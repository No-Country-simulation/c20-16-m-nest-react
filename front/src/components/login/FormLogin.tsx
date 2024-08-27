"use client";
import { FromInputs } from "@/interfaces/FormInputs";
import { useForm } from "react-hook-form";

export default function FromLogin() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FromInputs>();
  return (
    <form
      className="max-w-sm mx-auto border px-4 py-3 rounded-md "
      onSubmit={handleSubmit((data) => {
        reset(), console.log(data);
      })}
    >
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">El email es requerido</span>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500">La contraseña es requerido</span>
        )}
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Iniciar sesion
      </button>
    </form>
  );
}
