import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagRepositories);

    let tags = await tagsRepositories.find();

    return classToPlain(tags);
  }
}

export { ListTagsService };
