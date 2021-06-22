import { Request, Response } from "express";
import { UserService } from "../services/UserServices";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, admin } = request.body;

    const createUserService = new UserService();

    const user = await createUserService.execute({ name, email, admin });

    return response.json(user);
  }
}

export { CreateUserController };
