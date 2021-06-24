import { getCustomRepository } from "typeorm";
import { ICreateComplement } from "../dtos/ICreateComplement";
import { Complement } from "../entities/Complement";
import { ICreateComplementService } from "../interfaces/ICreateComplementService";
import { ComplementRepositories } from "../repositories/ComplementRepositories";
import { UserRepositories } from "../repositories/UserRepositories";

class CreateComplementService implements ICreateComplementService {
  async execute({
    user_sender,
    user_receiver,
    tag_id,
    message,
  }: ICreateComplement): Promise<Complement> {
    const complementRepository = getCustomRepository(ComplementRepositories);

    const userRepositories = getCustomRepository(UserRepositories);

    if (user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver");
    }

    const userReceiverExists = await userRepositories.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error("User Receiver does not exists");
    }

    const complement = complementRepository.create({
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    await complementRepository.save(complement);

    return complement;
  }
}

export { CreateComplementService };
