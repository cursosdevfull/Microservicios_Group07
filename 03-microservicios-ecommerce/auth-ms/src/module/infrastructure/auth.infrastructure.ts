import Auth from "../domain/auth";
import AuthRepository from "../domain/auth.repository";
import Model from "./models/auth.model";
export default class AuthInfrastructure implements AuthRepository {
  async register(auth: Auth): Promise<void> {
    await Model.create(auth);
  }

  async findOne(where: { [s: string]: string | number }): Promise<Auth | null> {
    return await Model.findOne(where);
  }

  async update(
    where: { [s: string]: string | number },
    data: { [s: string]: string | number }
  ): Promise<void> {
    await Model.updateOne(where, data);
  }
}
