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