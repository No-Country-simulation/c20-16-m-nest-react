import axios from "axios";
import { redirect } from 'next/navigation';
import { create } from "zustand";

/* const router = useRouter(); */

type MenuState = {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
};

export const useMenuStore = create<MenuState>((set) => ({
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export const LoginAction = create((set) => ({
  userLogin: false,
  tokenUser: "",
  //user: {}
  setCookies: () => set({ userLogin: true }),
  setTokenUser: (data: string) => set({ tokenuser: data }),
  //setUser: (data) => set({user: data})
}));

export const usersId = create((set) => ({
  user: {},

  /* setUser: async (id: any, token: any) => {
    try {
      const dataUser = await fetch(`${URLS.URL}/api/v1/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      });
      const response = await dataUser;
      set(response);
      //console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, */
  setUser: (data: any) => set({ user: data }),
}));

export const aplyJson = create((set) => ({
  allReportAnimals: [],
  imagesUpload: [],
  isLoading: true,
  getReportAnimals: async () => {
    try {
      const res = await axios.get("http://localhost:8000/reportAnimals");
      set({ allReportAnimals: res.data });
    } catch (error) {
      console.log(error);
    }
  },
  postReportAnimals: async (data: any) => {
    try {
      const res = await axios.post("http://localhost:8000/reportAnimals", {
        title: data.title,
        description: data.description,
        images: {
          urls: [
            "/images/reports/news/image-1.jpg",
            "/images/reports/news/image-2.jpg",
            "/images/reports/news/image-3.jpg",
            "/images/reports/news/image-4.jpg",
            "/images/reports/news/image-5.jpg",
            "/images/reports/news/image-6.jpg",
          ],
        },
        species: data.species,
        sex: data.sex,
        size: data.size,
        location: {
          street: data.street,
          number: data.number,
          province: data.province,
          locality: data.locality,
          postalCode: data.postalCode,
        },
      });
      const response = res;
      console.log(response.data);
      setTimeout(() => {
        alert("Enviado con exito ");
        set({ isLoading: true });
        /* router.push("/report"); */
        //redirect("/report")
        window.location.href = "/report"
      }, 2000);
      /* alert("Enviado con exito "); */
    } catch (error) {
      console.log(error);
    }
  },
  postImageUpload: async (data: any) => {
    /*let imageName = images[0].name;
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/diucgnfdh/ReportsAnimals/upload",
      {
        imageName,
      }
    ); */
    try {
      const res = await axios.post("/api/upload", {
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  setIsLoading: () => set({ isLoading: false }),
}));
