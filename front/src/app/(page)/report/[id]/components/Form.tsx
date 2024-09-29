"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import clsx from "clsx";

export default function Form({ className }: { className?: string }) {
  return (
    <div className={clsx("flex flex-col gap-6", className)}>
      <h3 className="text-xl font-semibold">Pregunta por mí</h3>
      <form className="flex flex-col gap-3">
        <Input variant="flat" label="Nombre" className="w-full md:w-[450px]" />
        <Input
          variant="flat"
          label="Teléfono (opcional)"
          className="w-full md:w-[450px]"
        />
        <Input variant="flat" label="Email" className="w-full md:w-[450px]" />
        <Textarea
          variant="flat"
          label="Mensaje"
          className="w-full md:w-[450px]"
        />
        <Button type="submit" color="primary" className="w-full md:max-w-28">
          Consultar
        </Button>
      </form>
    </div>
  );
}
