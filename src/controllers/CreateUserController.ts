import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserServices";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, admin, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      admin,
      password,
    });

    return response.json(user);
  }
}

export { CreateUserController };
