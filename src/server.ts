import "reflect-metadata";

import express from "express";
import "express-async-errors";

import "./database";
import { router } from "./router";
import { verifyError } from "./errors/VerifyError";

const app = express();

app.use(express.json());

app.use(router);

app.use(verifyError);

app.listen(3333);
