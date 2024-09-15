"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, Button, Input } from "@nextui-org/react";
import StatusTag from "@/components/profile/StatusBtn";

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
  address: z.object({
    province: z
      .string()
      .min(1, "Provincia requerida")
      .refine((val) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val), {
        message:
          "La Provincia no puede contener números ni caracteres que no sean letras.",
      }),
    locality: z
      .string()
      .min(1, "Localidad requerida")
      .refine((val) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val), {
        message:
          "La localidad no puede contener números ni caracteres que no sean letras.",
      }),
    street: z
      .string()
      .min(1, "Calle requerida")
      .refine((val) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val), {
        message:
          "La calle no puede contener números ni caracteres que no sean letras.",
      }),
    houseNumber: z
      .string()
      .min(1, "El número de casa es requerido")
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
  }),
});

type FormData = z.infer<typeof FormUserSchema>;

const profile: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormUserSchema),
    defaultValues: {
      name: "Pepito Perez",
      email: "pepito99perez@gmail.com",
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

  return (
    <>
      <div className="w-full flex justify-center py-8 mt-8">
        <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12 flex flex-col justify-center items-center">
          <div className="w-full flex justify-between items-start pb-8">
            <div className="flex flex-col gap-4 justify-evenly">
              <h1 className="text-4xl text-primary font-bold py-2 ">
                Bienvenido Pepito!
              </h1>
              <h2 className="text-2xl">Pepito Perez</h2>
              <StatusTag status="Persona" />
            </div>
            <div>
              <Avatar
                isBordered
                color="primary"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                className="w-24 h-24 text-large"
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
                label="Nombre Completo"
                variant="flat"
                isInvalid={!!errors.name}
                errorMessage={errors.name?.message}
                size="lg"
              />
            </div>
            <div>
              <span className="text-xl text-primary">Correo Electrónico</span>
              <Input
                {...register("email")}
                isRequired
                type="email"
                label="Correo electrónico"
                variant="flat"
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
                size="lg"
              />
            </div>
            <div>
              <span className="text-xl text-primary">Teléfono</span>
              <Input
                {...register("phone")}
                label="Número de teléfono (opcional)"
                type="number"
                variant="flat"
                isInvalid={!!errors.phone}
                errorMessage={errors.phone?.message}
                size="lg"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xl text-primary">Dirección</span>
              <Input
                {...register("address.province")}
                label="Provincia"
                type="text"
                variant="flat"
                isInvalid={!!errors.address?.province}
                errorMessage={errors.address?.province?.message}
                size="lg"
              />
              <Input
                {...register("address.locality")}
                label="Localidad"
                type="text"
                variant="flat"
                isInvalid={!!errors.address?.locality}
                errorMessage={errors.address?.locality?.message}
                size="lg"
              />
              <div className="flex flex-row gap-4">
                <Input
                  {...register("address.street")}
                  label="Calle"
                  type="text"
                  variant="flat"
                  isInvalid={!!errors.address?.street}
                  errorMessage={errors.address?.street?.message}
                  size="lg"
                />
                <Input
                  {...register("address.houseNumber")}
                  label="Altura/número"
                  type="number"
                  variant="flat"
                  isInvalid={!!errors.address?.houseNumber}
                  errorMessage={errors.address?.houseNumber?.message}
                  size="lg"
                />
              </div>
              <Input
                {...register("address.apartment")}
                label="Piso/Departamento"
                type="text"
                variant="flat"
                isInvalid={!!errors.address?.apartment}
                errorMessage={errors.address?.apartment?.message}
                size="lg"
              />
              <Input
                {...register("address.postalCode")}
                label="Código Postal"
                type="number"
                variant="flat"
                isInvalid={!!errors.address?.postalCode}
                errorMessage={errors.address?.postalCode?.message}
                size="lg"
              />
            </div>
            <Button
              type="submit"
              className="w-1/12 bg-primary text-base text-white rounded-3xl"
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
