import { User } from "../entities/User";
import { IUserInterface } from "../interfaces/IUserServices";
import { UserRepositories } from "../repositories/UserRepositories";

class UserService implements IUserInterface {
  async execute({ name, email, admin }: User): Promise<User> {
    const userRepositories = new UserRepositories();

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = userRepositories.find({ email });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = userRepositories.create({
      name,
      email,
      admin,
    });

    await userRepositories.save(user);

    return user;
  }
}

export { UserService };
