import { jwtDecode } from "jwt-decode";

export const decodeJWT = (token:  string | any) => {
  const decoded = jwtDecode(token);
  return decoded;
};


