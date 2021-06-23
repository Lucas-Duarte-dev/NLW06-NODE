import { Tag } from "../entities/Tag";

export interface ITagServices {
  execute(name: string): Promise<Tag>;
}
