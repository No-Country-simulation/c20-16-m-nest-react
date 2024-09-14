"use client"
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Avatar, Button } from "@nextui-org/react";
import StatusTag from '@/components/profile/StatusBtn';

const FormUserSchema = z.object({
    name: z.string().min(1, "Nombre completo requerido"),
    email: z.string().email("Email inválido").refine(
        (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        { message: "Formato de email inválido" }
    ),
    phone: z
        .string()
        .optional()
        .transform((val) => (val ? Number(val) : undefined))
        .refine((val) => !val || !isNaN(val), { message: "Teléfono inválido" }),
    address: z.object({
        province: z.string().min(1, "Provincia requerida"),
        locality: z.string().min(1, "Localidad requerida"),
        street: z.string().min(1, "Calle requerida"),
        houseNumber: z
            .string()
            .min(1, "Número de casa requerido")
            .transform((val) => Number(val))
            .refine((val) => val > 0 && !isNaN(val), { message: "Número de casa inválido" }),
        apartment: z
            .string()
            .optional()
            .transform((val) => (val ? Number(val) : undefined))
            .refine((val) => !val || val > 0, { message: "Apartamento inválido" }),
        postalCode: z
            .string()
            .min(1, "Código postal requerido")
            .transform((val) => Number(val))
            .refine((val) => val > 0 && !isNaN(val), { message: "Código postal inválido" }),
    }),
});

type FormData = z.infer<typeof FormUserSchema>;

interface UserFormData {
    name: string;
    email: string;
    phone: number;
    address: {
        province: string;
        locality: string;
        street: string;
        houseNumber: number;
        apartment?: number;
        postalCode: number;
    };
}

const profile: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(FormUserSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: 0,
            address: {
                province: '',
                locality: '',
                street: '',
                houseNumber: 0,
                apartment: 0,
                postalCode: 0,
            },
        },
    });


    const onSubmit = (data: FormData) => {
        console.log(data);
        // para enviar al back
    };

    return (
        <>
            <div className='w-full flex justify-center py-8 mt-8'>
                <div className='w-10/12 flex flex-col justify-center items-center'>
                    <div className='w-full flex justify-between items-start'>
                        <div className='flex flex-col gap-4 justify-evenly'>
                            <h1 className='text-4xl text-primary font-bold py-2 '>Bienvenido Pepito!</h1>
                            <h2 className='text-2xl'>Pepito Perez</h2>
                            <StatusTag status="Persona" />
                        </div>
                        <div>
                            <Avatar isBordered color='primary' src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-24 h-24 text-large" />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Button type="submit"
                            className='bg-primary text-xl text-white'
                        >Guardar</Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default profile;