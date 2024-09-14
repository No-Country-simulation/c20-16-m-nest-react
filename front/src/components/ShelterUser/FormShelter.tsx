"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface allFormData {
  name: string;
  description: string;
  email: string;
  phone: string;
  province: string;
  locality: string;
  street: string;
  houseNumber: string;
  cp: string;
}

interface DataFormShelter {
  title: string;
  html: {
    condition: boolean; //en caso que sea false sera un <textarea/>
    type: string;
    placeHolder: string;
    name: string;
  };
}

interface DataInputsDirect {
  type: string;
  placeHolder: string;
  name: string;
}

const listFromData: DataFormShelter[] = [
  {
    title: "Nombre del refugio",
    html: {
      condition: true, //en caso que sea false sera un <textarea/>
      type: "text",
      placeHolder: "ej: Huellitas de amor",
      name: "name",
    },
  },
  {
    title: "Descripcion",
    html: {
      condition: false,
      type: "text",
      placeHolder: "ej: Somos un refugio en ...",
      name: "description",
    },
  },
  {
    title: "Correo electronico",
    html: {
      condition: true,
      type: "email",
      placeHolder: "",
      name: "email",
    },
  },
  {
    title: "Telefono",
    html: {
      condition: true,
      type: "number",
      placeHolder: "ej: 112233445566",
      name: "phone",
    },
  },
];

const directionInputs: DataInputsDirect[] = [
  {
    type: "text",
    placeHolder: "Provincia",
    name: "province",
  },
  {
    type: "text",
    placeHolder: "Localidad",
    name: "locality",
  },
  {
    type: "number",
    placeHolder: "calle y numero",
    name: "streetAndHouseNumber",
  },

  /* {
    type: "text",
    placeHolder: "Calle",
    name: "street",
  },
  {
    type: "number",
    placeHolder: "altura",
    name: "houseNumber",
  }, */
  /* {
        type: "text",
        placeHolder: "Piso/departamento",
        name: "houseNumber"
    }, */
  {
    type: "number",
    placeHolder: "Codigo postal",
    name: "cp",
  },
];

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Debe ingresar un nombre",
  }),
  description: z.string().min(1, {
    message: "Ingrese un mensaje",
  }),
  email: z.string().email({
    message: "Ingresa un correo valido",
  }),
  phone: z.string().min(1, {
    message: "Ingrese un numero de telefono",
  }),
  province: z.string().min(1, {
    message: "Debe ingresar una provincia",
  }),
  locality: z.string().min(1, {
    message: "Debe ingresar una localidad",
  }),
  cp: z.string().min(1, {
    message: "Debe ingresar un codigo postal",
  }),
  street: z.string().min(1, {
    message: "Debe ingresar una calle",
  }),
  houseNumber: z.string().min(1, {
    message: "Debe ingresar el numero del lugar",
  }),
});

const conditionErrors = (value: string, errors: any) => {
  switch (value) {
    case "name":
      return errors.name;
    case "description":
      return errors.description;
    case "email":
      return errors.email;
    case "phone":
      return errors.phone;
    case "province":
      return errors.province;
    case "locality":
      return errors.locality;
    case "cp":
      return errors.cp;
  }
};

export default function FormShelter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({ resolver: zodResolver(formSchema) });
  return (
    <form
      className="flex flex-col gap-y-3"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        reset();
      })}
    >
      {listFromData.map((item) => (
        <label className="flex flex-col gap-y-2" key={item.title}>
          <h5 className="text-lg font-normal text-primary">{item.title}</h5>
          {item.html.condition ? (
            <Input
              key={item.title}
              {...register(item.html.name)}
              isInvalid={conditionErrors(item.html.name, errors) ? true : false}
              type={item.html.type}
              placeholder={item.html.placeHolder}
              variant="flat"
              radius="lg"
              name={item.html.name}
              errorMessage={conditionErrors(item.html.name, errors)?.message}
            />
          ) : (
            <Textarea
              key={item.title}
              isInvalid={errors.description ? true : false}
              {...register(item.html.name)}
              type={item.html.type}
              placeholder={item.html.placeHolder}
              variant="flat"
              radius="lg"
              name={item.html.name}
              errorMessage={conditionErrors(item.html.name, errors)?.message}
            />
          )}
        </label>
      ))}
      <label className="flex flex-col gap-y-2">
        <h5 className="text-lg font-normal text-primary flex flex-col gap-y-2">
          Direccion
        </h5>
        {directionInputs.map((item, index) =>
          index === 2 ? (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center gap-2"
            >
              <Input
                {...register("street", { required: true })}
                isInvalid={errors.street ? true : false}
                type="text"
                placeholder="Calle"
                variant="flat"
                radius="lg"
                name="street"
                errorMessage={errors.street?.message?.toString()}
              />
              <Input
                {...register("houseNumber", { required: true })}
                isInvalid={errors.houseNumber ? true : false}
                type="number"
                placeholder="numero/altura"
                variant="flat"
                radius="lg"
                name="houseNumber"
                errorMessage={errors.houseNumber?.message?.toString()}
              />
            </div>
          ) : (
            <Input
              key={index}
              isInvalid={conditionErrors(item.name, errors) ? true : false}
              {...register(item.name, { required: true })}
              type={item.type}
              placeholder={item.placeHolder}
              variant="flat"
              radius="lg"
              name={item.name}
              errorMessage={conditionErrors(item.name, errors)?.message}
            />
          )
        )}
      </label>
      <button
        type="submit"
        className="bg-primary py-2 rounded-full text-white font-medium text-lg md:w-[180px] w-full"
      >
        Aceptar
      </button>
    </form>
  );
}
