import express, { Application, Request, Response } from "express";
import router from "./module/interfaces/http/router";

class App {
  readonly expressApp: Application;

  constructor() {
    this.expressApp = express();
    this.middlewares();
    this.mountRoutes();
  }

  middlewares() {
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded({ extended: false }));
  }

  mountRoutes() {
    this.expressApp.use("/auth", router);
    this.expressApp.get("/", (req: Request, res: Response) => {
      res.send("All's ok");
    });
  }
}

export default new App().expressApp;
