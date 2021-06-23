import { ICreateTagDTO } from "../dtos/ICreateTagDTO";
import { Tag } from "../entities/Tag";

export interface ITagServices {
  execute({ name }: ICreateTagDTO): Promise<Tag>;
}
