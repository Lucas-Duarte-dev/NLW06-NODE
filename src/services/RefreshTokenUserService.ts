import { getCustomRepository } from "typeorm";
import { GenerateTokenProvider } from "../provider/GenerateTokenProvider";
import { RefreshTokenRepositories } from "../repositories/RefreshTokenRepositories";

class RefreshTokenUserService {
  async execute(refresh_token: string) {
    const refreshTokenRepositories = getCustomRepository(
      RefreshTokenRepositories
    );

    const refreshTokenExists = await refreshTokenRepositories.findOne(
      refresh_token
    );

    if (!refreshTokenExists) {
      throw new Error("Refresh token invalid");
    }

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(
      refreshTokenExists.user_id
    );

    return token;
  }
}
