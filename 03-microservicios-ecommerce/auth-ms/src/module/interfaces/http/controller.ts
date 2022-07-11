import { Request, Response } from "express";
import AuthApplication from "../../application/auth.application";
import { Tokens } from "../../domain/auth.repository";

export default class {
  application: AuthApplication;

  constructor(readonly app: AuthApplication) {
    this.application = app;
    this.register = this.register.bind(this);
  }

  register(req: Request, res: Response) {
    const { email, password } = req.body;

    const results: Tokens = this.application.register(email, password);
    res.json(results);
  }

  login(req: Request, res: Response) {
    res.send("login");
  }

  validateAccessToken(req: Request, res: Response) {
    res.send("validate access token");
  }

  getNewAccessToken(req: Request, res: Response) {
    res.send("get new access token");
  }
}
