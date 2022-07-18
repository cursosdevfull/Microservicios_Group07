import express from "express";
import Controller from "./controller";
import AuthApplication from "../../application/order.application";
import AuthInfrastructure from "../../infrastructure/auth.infrastructure";
import { ErrorsService } from "../../../services/errors.service";
import ValidatorsService from "../../../services/validators.service";
import { orderSchema } from "./order.schema";

const infrastructure = new AuthInfrastructure();
const application = new AuthApplication(infrastructure);
const controller = new Controller(application);

class Router {
  readonly router: express.Router;

  constructor() {
    this.router = express.Router();
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.post(
      "/",
      ValidatorsService.validate(orderSchema.INSERT),
      ErrorsService.catchError(controller.insert)
    );
  }
}

export default new Router().router;
