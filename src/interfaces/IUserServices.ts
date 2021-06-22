import { User } from "../entities/User";

export interface IUserInterface {
  execute({ name, email, admin }: User): Promise<User>;
}
