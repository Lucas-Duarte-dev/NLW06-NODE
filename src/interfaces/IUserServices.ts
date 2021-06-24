import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

export interface IUserInterface {
  execute({ name, email, password, admin }: ICreateUserDTO): Promise<User>;
}
