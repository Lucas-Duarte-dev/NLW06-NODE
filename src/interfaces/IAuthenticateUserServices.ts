import { IAuthenticateUserDTO } from "../dtos/IAuthenticaUserDTO";

export interface IAuthenticateUserService {
  execute({ email, password }: IAuthenticateUserDTO): Promise<string>;
}
