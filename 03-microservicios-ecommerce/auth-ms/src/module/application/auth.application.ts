import Auth from "../domain/auth";
import AuthRepository, { Tokens } from "../domain/auth.repository";

export default class AuthApplication {
  readonly repository: AuthRepository;

  constructor(repository: AuthRepository) {
    this.repository = repository;
  }

  register(email: string, password: string): Tokens {
    const refreshToken = "aa63c417-2a75-4ea9-807a-32b61942ed04";
    const auth = new Auth(email, password, refreshToken);

    const accessToken = this.repository.register(auth);

    return { accessToken, refreshToken };
  }
}
