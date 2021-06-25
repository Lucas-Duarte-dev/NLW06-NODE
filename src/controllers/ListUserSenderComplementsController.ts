import { Request, Response } from "express";
import { ListUserSenderComplementsService } from "../services/ListUserSenderComplementsService";

class ListUserSenderComplementsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUserSenderComplementsService =
      new ListUserSenderComplementsService();

    const { user_id } = request;

    const compliments = await listUserSenderComplementsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserSenderComplementsController };
