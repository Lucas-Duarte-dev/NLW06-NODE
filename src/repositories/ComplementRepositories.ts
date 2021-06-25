import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliment";

@EntityRepository(Compliment)
class ComplementRepositories extends Repository<Compliment> {}

export { ComplementRepositories };
