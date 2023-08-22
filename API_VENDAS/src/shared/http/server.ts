import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
import AppError from "@shared/errors/AppError";

const PORT = 3333;

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

// AppErrors middleware
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    const isAppError = error instanceof AppError;

    const responseStatus = isAppError ? error.statusCode : 500;
    const responseMessage = isAppError
      ? error.message
      : "Internal server error.";

    return response.status(responseStatus).json({
      status: "error",
      message: responseMessage,
    });
  },
);

app.listen(PORT, () => console.log(`Server start at por ${PORT} `));
