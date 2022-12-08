import { UserRol } from "#/types";

export interface IUserService {
  rol: UserRol;
  email: string;
  name: string;
  nit: string;
  phone: string;
  company: string;
  urlPhoto?: string;
}
