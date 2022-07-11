import express from "express";
import Controller from "./controller";
import AuthApplication from "../../application/auth.application";
import AuthInfrastructure from "../../infrastructure/auth.infrastructure";

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
    this.router.post("/register", controller.register);
    this.router.post("/login", controller.login);
    this.router.post("/validate-access-token", controller.validateAccessToken);
    this.router.post("/get-new-access-token", controller.getNewAccessToken);
  }
}

export default new Router().router;
