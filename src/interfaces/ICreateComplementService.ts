import { ICreateComplement } from "../dtos/ICreateComplement";
import { Complement } from "../entities/Complement";

export interface ICreateComplementService {
  execute({
    user_sender,
    user_receiver,
    tag_id,
    message,
  }: ICreateComplement): Promise<Complement>;
}
