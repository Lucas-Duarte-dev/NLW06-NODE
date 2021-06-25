import { getCustomRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";
import { ComplementRepositories } from "../repositories/ComplementRepositories";

class ListUserReceiveComplementsService {
  async execute(user_id: string): Promise<Compliment[]> {
    const complimentRepositories = getCustomRepository(ComplementRepositories);

    const compliments = await complimentRepositories.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return compliments;
  }
}

export { ListUserReceiveComplementsService };
