import { create } from "zustand";
import Cookies from "js-cookie";
import { URLS } from "@/data/cofigEnv";
import axios from "axios";

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
          urls: data.images.url,
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
      alert("Enviado con exito ");
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
}));
