"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface FromContactInputs {
  name: string;
  email: string;
  sms: string;
}

const formSchema = z.object({
  name: z.string().min(3,{
    message: "Debe tener mas de 3 caracteres"
  }),
  email: z.string().email({
    message: "Ingresa un correo valido",
  }),
  sms: z.string().min(1,{
    message: "Debe ingresar un mensaje"
  }),
});

export default function FormContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FromContactInputs>({ resolver: zodResolver(formSchema) });
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit((data) => {
        reset(), console.log(data);
      })}
    >
      <Input
        {...register("name", { required: true })}
        isInvalid={errors.name ? true : false}
        name="name"
        variant="flat"
        type="text"
        label="Nombre"
        radius="lg"
        className="w-full md:w-[450px] "
        errorMessage={errors.name?.message}
      />
      <Input
        {...register("email", { required: true })}
        isInvalid={errors.email ? true : false}
        name="email"
        variant="flat"
        type="email"
        label="Email"
        radius="lg"
        className="w-full md:w-[450px]"
        errorMessage={errors.email?.message}
      />
      <Textarea
        {...register("sms", { required: true })}
        name="sms"
        variant="flat"
        type="text"
        label="Mensaje"
        className="w-full md:w-[450px]"
        isInvalid={errors.sms ? true : false}
        radius="lg"
        errorMessage={errors.sms?.message}
      />
      <button
        type="submit"
        color="primary"
        className="bg-primary py-3 px-8 rounded-full font-medium text-lg text-white w-full lg:w-fit"
      >
        Enviar
      </button>
    </form>
  );
}
