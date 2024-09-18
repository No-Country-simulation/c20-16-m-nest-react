"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, Button, Input } from "@nextui-org/react";
import StatusTag from "@/components/profile/StatusBtn";
import Cookies from "js-cookie";
import { usersId } from "@/context/zustang";

const FormUserSchema = z.object({
  name: z
    .string()
    .min(1, "Nombre requerido")
    .refine((val) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val), {
      message:
        "El nombre no puede contener números ni caracteres que no sean letras.",
    }),
  email: z
    .string()
    .min(1, "Correo electrónico requerido")
    .email("Formato de email inválido"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[+]?[\d]+$/.test(val), {
      message: "Teléfono inválido",
    })
    .transform((val) => (val ? Number(val.replace("+", "")) : undefined)),
  address: z
    .object({
      province: z
        .string()
        .optional()
        .refine((val) => !val || /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val), {
          message:
            "La Provincia no puede contener números ni caracteres que no sean letras.",
        }),
      locality: z
        .string()
        .optional()
        .refine((val) => !val || /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val), {
          message:
            "La localidad no puede contener números ni caracteres que no sean letras.",
        }),
      street: z
        .string()
        .optional()
        .refine((val) => !val || /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val), {
          message:
            "La calle no puede contener números ni caracteres que no sean letras.",
        }),
      houseNumber: z
        .string()
        .optional()
        .refine((val) => !val || !isNaN(Number(val)), {
          message: "Carácter inválido, por favor ingrese números.",
        })
        .transform((val) => (val ? Number(val) : undefined)),
      apartment: z.string().optional(),
      postalCode: z
        .string()
        .optional()
        .refine((val) => !val || !isNaN(Number(val)), {
          message: "Carácter inválido, por favor ingrese números.",
        })
        .transform((val) => (val ? Number(val) : undefined)),
    })
    .optional(),
});

type FormData = z.infer<typeof FormUserSchema>;

const profile: React.FC = () => {
  const { user }: any = usersId();
  console.log(user);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormUserSchema),
    defaultValues: {
      name: user ? user.firstName : "hola",
      email: user.email || " ",
      // phone: 0,
      address: {
        province: "",
        locality: "",
        street: "",
        // houseNumber: 0,
        // apartment: 0,
        // postalCode: 0,
      },
      // datos de ejemplo
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // para enviar al back
  };

  //const {user} = setUser();
  return (
    <>
      <div className="w-full flex justify-center py-4 mt-4 md:py-8 md:mt-8">
        <div className="w-full md:w-11/12 flex flex-col justify-center items-center">
          <div className="w-full flex justify-between items-start pb-8">
            <div className="flex flex-col gap-4 justify-evenly">
              <h1 className="w-1/2 lg:w-full text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
                ¡Bienvenido {user?.username ? user?.username : "pepito"}!
              </h1>
              <h2 className="text-base md:text-2xl">
                {user?.firstName ? user?.firstName : "Pepito perez"}
              </h2>
              <StatusTag status="Persona" />
            </div>
            <div>
              <Avatar
                isBordered
                color="primary"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                className="w-16 h-16 md:w-24 md:h-24 text-large"
              />
            </div>
          </div>
          <form
            className="w-full flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <span className="text-xl text-primary">Nombre</span>
              <Input
                {...register("name")}
                type="text"
                placeholder="Nombre completo"
                variant="flat"
                isInvalid={!!errors.name}
                errorMessage={errors.name?.message}
                size="md"
              />
            </div>
            <div>
              <span className="text-xl text-primary">Correo Electrónico</span>
              <Input
                {...register("email")}
                isRequired
                type="email"
                placeholder="Correo electrónico"
                variant="flat"
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
                size="md"
              />
            </div>
            <div>
              <span className="text-xl text-primary">Teléfono</span>
              <Input
                {...register("phone")}
                placeholder="Número de teléfono (opcional)"
                type="number"
                variant="flat"
                isInvalid={!!errors.phone}
                errorMessage={errors.phone?.message}
                size="md"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xl text-primary">Dirección</span>
              <Input
                {...register("address.province")}
                placeholder="Provincia"
                type="text"
                variant="flat"
                isInvalid={!!errors.address?.province}
                errorMessage={errors.address?.province?.message}
                size="md"
              />
              <Input
                {...register("address.locality")}
                placeholder="Localidad"
                type="text"
                variant="flat"
                isInvalid={!!errors.address?.locality}
                errorMessage={errors.address?.locality?.message}
                size="md"
              />
              <div className="flex flex-row gap-4">
                <Input
                  {...register("address.street")}
                  placeholder="Calle"
                  type="text"
                  variant="flat"
                  isInvalid={!!errors.address?.street}
                  errorMessage={errors.address?.street?.message}
                  size="md"
                />
                <Input
                  {...register("address.houseNumber")}
                  placeholder="Altura/número"
                  type="number"
                  variant="flat"
                  isInvalid={!!errors.address?.houseNumber}
                  errorMessage={errors.address?.houseNumber?.message}
                  size="md"
                />
              </div>
              <Input
                {...register("address.apartment")}
                placeholder="Piso/Departamento"
                type="text"
                variant="flat"
                isInvalid={!!errors.address?.apartment}
                errorMessage={errors.address?.apartment?.message}
                size="md"
              />
              <Input
                {...register("address.postalCode")}
                placeholder="Código Postal"
                type="number"
                variant="flat"
                isInvalid={!!errors.address?.postalCode}
                errorMessage={errors.address?.postalCode?.message}
                size="md"
              />
            </div>
            <Button
              type="submit"
              className="w-full md:w-1/12 bg-primary text-base text-white rounded-3xl"
            >
              Guardar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default profile;
