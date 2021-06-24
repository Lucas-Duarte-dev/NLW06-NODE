import { Request, Response } from "express";
import { CreateComplementService } from "../services/CreateComplementService";

class CreateComplementController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tag_id, user_receiver, user_sender, message } = request.body;

    const createComplementService = new CreateComplementService();

    const complement = await createComplementService.execute({
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    return response.json(complement);
  }
}

export { CreateComplementController };
