import { Input, Textarea } from "@nextui-org/react";

const listFromData = [
  {
    title: "Nombre del refugio",
    html: {
      condition: true, //en caso que sea false sera un <textarea/>
      type: "text",
      placeHolder: "ej: Huellitas de amor",
      name: "name",
      /* value: "" */
    },
  },
  {
    title: "Descripcion",
    html: {
      input: false,
      type: "text",
      placeHolder: "ej: Somos un refugio en ...",
      name: "description",
      /* value: "" */
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
      type: "tel",
      placeHolder: "ej: Huellitas de amor",
      name: "phone",
    },
  },
];

const directionInputs = [
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
    type: "text",
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
    type: "text",
    placeHolder: "Codigo postal",
    name: "cp",
  },
];
export default function () {
  return (
    <form action="">
      {listFromData.map((item) => (
        <label className="flex flex-col gap-y-2" key={item.title}>
          <h5 className="text-lg font-normal text-primary">{item.title}</h5>
          {item.html.condition ? (
            <Input
              type={item.html.type}
              placeholder={item.html.placeHolder}
              variant="flat"
              radius="lg"
              name={item.html.name}
            />
          ) : (
            <Textarea
              type={item.html.type}
              placeholder={item.html.placeHolder}
              variant="flat"
              radius="lg"
              name={item.html.name}
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
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="Calle"
                variant="flat"
                radius="lg"
                name="street"
              />
              <Input
                type="number"
                placeholder="numero/altura"
                variant="flat"
                radius="lg"
                name="houseNumber"
              />
            </div>
          ) : (
            <Input
              key={index}
              type={item.type}
              placeholder={item.placeHolder}
              variant="flat"
              radius="lg"
              name={item.name}
            />
          )
        )}
      </label>
    </form>
  );
}
