import { ICreateCompliment } from "../dtos/ICreateCompliment";
import { Compliment } from "../entities/Compliment";

export interface ICreateComplimentService {
  execute({
    user_sender,
    user_receiver,
    tag_id,
    message,
  }: ICreateCompliment): Promise<Compliment>;
}
