import { create } from "zustand";
import Cookies from "js-cookie";

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
