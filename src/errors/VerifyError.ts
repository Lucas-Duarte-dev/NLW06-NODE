import { NextFunction, Request, Response } from "express";

class VerifyError {
  verify(err: Error, request: Request, response: Response, next: NextFunction) {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}

export default new VerifyError();
