import dayjs from "dayjs";
import { getCustomRepository } from "typeorm";
import { RefreshTokenRepositories } from "../repositories/RefreshTokenRepositories";

class GenerateRefreshToken {
  async execute(user_id: string) {
    const refreshToken = getCustomRepository(RefreshTokenRepositories);
    const expires_in = dayjs().add(15, "second").unix();

    const generateRefreshToken = refreshToken.create({ user_id, expires_in });

    await refreshToken.save(generateRefreshToken);

    return generateRefreshToken;
  }
}

export { GenerateRefreshToken };
