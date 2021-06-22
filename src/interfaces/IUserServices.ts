import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

export interface IUserInterface {
  execute({ name, email, admin }: ICreateUserDTO): Promise<User>;
}
