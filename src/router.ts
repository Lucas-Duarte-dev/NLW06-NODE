import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiveComplementsService } from "./services/ListUserReceiveComplementsService";
import { ListUserSenderComplementsService } from "./services/ListUserSenderComplementsService";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSenderComplementsController =
  new ListUserSenderComplementsService();
const listUserReceiveComplementsController =
  new ListUserReceiveComplementsService();

router.post("/users", createUserController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post("/session", authenticateUserController.handle);
router.post(
  "/complement",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplementsController.execute
);

router.get(
  "/users/compliments/sender",
  ensureAuthenticated,
  listUserSenderComplementsController.execute
);

export { router };
