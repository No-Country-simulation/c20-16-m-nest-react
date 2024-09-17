"use client";
import { FromInputs } from "@/interfaces/FormInputs";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Cookies from "js-cookie";
import { headers } from "next/headers";
import axios from "axios";

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FromInputs>();
  const [isVisible, setIsVisible] = useState(false);

  const login = async (data: FromInputs) => {
    console.log(data);
    try {
      /* const res = await axios.post(
        `https://shrill-wylma-ddf-daniel-435828be.koyeb.app/api/v1/auth/login`,
        {
          
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: data.email,
            password: data.password,
          }),
        }
      ); */
      /* const res = await axios.post(
        "https://shrill-wylma-ddf-daniel-435828be.koyeb.app/api/v1/auth/login",
        JSON.stringify({
          firstName: data.email,
          lastName: data.password,
        })
      ); */
      const res = await fetch(
        `${process.env.URL}/api/v1/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
          body: JSON.stringify({
            username: data.email,
            password: data.password,
          }),
        }
      );
      if (res.ok) {
        alert("logeado");
        const response = await res.json();
        Cookies.set('token-user', response.access_token)
        console.log(response.access_token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-y-3"
      onSubmit={handleSubmit((data) => {
        login(data);
        reset();
      })}
    >
      <Input
        {...register("email", { required: true })}
        type="text"
        label="Usuario o email"
        variant="flat"
        className="max-w-full z-0"
        radius="lg"
        isInvalid={errors.email ? true : false}
        errorMessage="Email incorrecto"
        name="email"
      />
      <Input
        {...register("password", { required: true })}
        key={"inside"}
        label="Password"
        variant="flat"
        className="max-w-full z-0"
        radius="lg"
        isInvalid={errors.password ? true : false}
        errorMessage="Contraseña incorrecto"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            aria-label="toggle password visibility"
          >
            {isVisible ? (
              <FaEye className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        name="password"
      />
      <p className=" text-black">
        No tenes cuenta?{" "}
        <Link href={"/register"} className="font-semibold">
          Registrate
        </Link>
      </p>
      <button
        type="submit"
        className="bg-primary py-2 rounded-full text-white font-medium text-xl md:w-[215px] w-full mx-auto"
      >
        Ingresar
      </button>
    </form>
  );
}
