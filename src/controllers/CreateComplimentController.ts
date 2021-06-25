import { Request, Response } from "express";
import { CreateComplementService } from "../services/CreateComplimentService";

class CreateComplimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tag_id, user_receiver, user_sender, message } = request.body;

    const createComplementService = new CreateComplementService();

    const compliment = await createComplementService.execute({
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    return response.json(compliment);
  }
}

export { CreateComplimentController };
