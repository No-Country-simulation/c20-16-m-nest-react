"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button, Input } from "@nextui-org/react";

const formSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(3),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Las contraseñas no son iguales",
    path: ["passwordConfirm"],
  });

export default function RegisterPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <main className="flex justify-center items-center min-h-screen p-12 bg-white">
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4 max-w-md w-full"
      >
        <Input
          {...form.register("name")}
          type="text"
          label="Nombre completo"
          variant="flat"
          className="max-w-md"
        />
        <Input
          {...form.register("email")}
          label="Email"
          variant="flat"
          className="max-w-md"
          isInvalid={!!form.formState.errors.email}
          errorMessage={form.formState.errors.email?.message}
        />
        <Input
          {...form.register("password")}
          type="password"
          label="Contraseña"
          variant="flat"
          className="max-w-md"
        />
        <Input
          {...form.register("passwordConfirm")}
          type="password"
          label="Confirmar contraseña"
          variant="flat"
          className="max-w-md"
          isInvalid={!!form.formState.errors.passwordConfirm}
          errorMessage={form.formState.errors.passwordConfirm?.message}
        />
        <Button type="submit" className="w-full mt-6" color="primary">
          Crear cuenta
        </Button>
      </form>
    </main>
  );
}
