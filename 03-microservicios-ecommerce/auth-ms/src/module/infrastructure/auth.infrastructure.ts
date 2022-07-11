import auth from "../domain/auth";
import AuthRepository, { Tokens } from "../domain/auth.repository";

export default class AuthInfrastructure implements AuthRepository {
  register(auth: auth): string {
    return "aa63c417-2a75-4ea9-807a-32b61942ed04";
  }
}
