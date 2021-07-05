import { sign } from "jsonwebtoken";

class GenerateTokenProvider {
  async execute(user_id: string) {
    const token = sign({}, process.env.SECRET_TOKEN, {
      subject: user_id,
      expiresIn: "20s",
    });

    return token;
  }
}

export { GenerateTokenProvider };
