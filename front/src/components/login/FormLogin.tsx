"use client";
import { FromInputs } from "@/interfaces/FormInputs";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Cookies from "js-cookie";
import { headers } from "next/headers";
import axios from "axios";
import { URLS } from "@/data/cofigEnv";
import { useRouter } from "next/navigation";
import { LoginAction } from "@/context/zustang";

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FromInputs>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { setCookies, setTokenUser }: any = LoginAction();
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get("token-user")) {
      router.push("/");
    }
  }, [Cookies.get("token-user")]);

  const login = async (data: FromInputs) => {
    console.log(data);
    try {
      const res: any = await axios.post(`${URLS.URL}/api/v1/auth/login`, {
        username: data.email,
        password: data.password,
      });
      alert("logeado");
      const response = await res;
      console.log(response.data);
      Cookies.set("token-user", response.data.access_token);
      setCookies();
      setTokenUser(response.access_token);
      router.push("/");
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
