import { getCustomRepository } from "typeorm";
import { Tag } from "../entities/Tag";
import { ITagServices } from "../interfaces/ITagServices";
import { TagRepositories } from "../repositories/TagRepositories";

class CreateTagServices implements ITagServices {
  async execute(name: string): Promise<Tag> {
    const tagsRepositories = getCustomRepository(TagRepositories);

    if (!name) {
      throw new Error("Icorrect name!");
    }

    const tagsAlreadyExists = await tagsRepositories.findOne({ name });

    if (tagsAlreadyExists) {
      throw new Error("Tag already exists!");
    }

    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagServices };
