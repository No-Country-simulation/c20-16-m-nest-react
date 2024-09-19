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
  getReportAnimals: async () => {
    const res = await axios.get("http://localhost:8000/reportAnimals");
    set({ allReportAnimals: res.data });
  },
}));
