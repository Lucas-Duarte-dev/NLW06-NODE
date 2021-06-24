import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IAuthenticateUserDTO } from "../dtos/IAuthenticaUserDTO";
import { IAuthenticateUserService } from "../interfaces/IAuthenticateUserServices";
import { UserRepositories } from "../repositories/UserRepositories";

class AuthenticateUserService implements IAuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserDTO): Promise<string> {
    const usersRepository = getCustomRepository(UserRepositories);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new Error("Credentials Incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Credentials Incorrect");
    }

    const token = sign(
      {
        email: user.email,
      },
      process.env.SECRET_TOKEN,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };