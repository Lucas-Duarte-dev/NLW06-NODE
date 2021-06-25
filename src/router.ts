import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";
import { ListUserReceiveComplementsController } from "./controllers/ListUserReceiveComplementsController";
import { ListUserSenderComplementsController } from "./controllers/ListUserSenderComplementsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSenderComplementsController =
  new ListUserSenderComplementsController();
const listUserReceiveComplementsController =
  new ListUserReceiveComplementsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();

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
  listUserReceiveComplementsController.handle
);

router.get(
  "/users/compliments/sender",
  ensureAuthenticated,
  listUserSenderComplementsController.handle
);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/users", ensureAuthenticated, listUserController.handle);

export { router };
