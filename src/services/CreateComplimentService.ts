import { getCustomRepository } from "typeorm";
import { ICreateCompliment } from "../dtos/ICreateCompliment";
import { Compliment } from "../entities/Compliment";
import { ICreateComplimentService } from "../interfaces/ICreateComplimentService";
import { ComplementRepositories } from "../repositories/ComplementRepositories";
import { UserRepositories } from "../repositories/UserRepositories";

class CreateComplementService implements ICreateComplimentService {
  async execute({
    user_sender,
    user_receiver,
    tag_id,
    message,
  }: ICreateCompliment): Promise<Compliment> {
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
