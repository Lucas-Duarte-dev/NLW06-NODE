import { EntityRepository, Repository } from "typeorm";
import { Complement } from "../entities/Complement";

@EntityRepository(Complement)
class ComplementRepositories extends Repository<Complement> {}

export { ComplementRepositories };
