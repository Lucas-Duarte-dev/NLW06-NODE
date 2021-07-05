import { getCustomRepository } from "typeorm";
import { GenerateTokenProvider } from "../provider/GenerateTokenProvider";
import dayjs from "dayjs";
import { RefreshTokenRepositories } from "../repositories/RefreshTokenRepositories";
import { GenerateRefreshToken } from "../provider/GenerateRefreshToken";

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

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshTokenExists.expires_in)
    );

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(
      refreshTokenExists.user_id
    );

    if (refreshTokenExpired) {
      await refreshTokenRepositories.delete({
        user_id: refreshTokenExists.user_id,
      });

      const generateRefreshTokenProvider = new GenerateRefreshToken();

      const refreshToken = await generateRefreshTokenProvider.execute(
        refreshTokenExists.user_id
      );

      return { token, refreshToken };
    }

    return token;
  }
}

export { RefreshTokenUserService };
