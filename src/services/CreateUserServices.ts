import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUserInterface } from "../interfaces/IUserServices";
import { UserRepositories } from "../repositories/UserRepositories";

class CreateUserService implements IUserInterface {
  async execute({
    name,
    email,
    password,
    admin,
  }: ICreateUserDTO): Promise<User> {
    const userRepositories = getCustomRepository(UserRepositories);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await userRepositories.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = userRepositories.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await userRepositories.save(user);

    return user;
  }
}

export { CreateUserService };
