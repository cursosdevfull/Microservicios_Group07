import Auth from "../domain/auth";
import AuthRepository, { Tokens } from "../domain/auth.repository";
import AuthAppService from "./auth.service";

export default class AuthApplication {
  readonly repository: AuthRepository;

  constructor(repository: AuthRepository) {
    this.repository = repository;
  }

  async register(
    name: string,
    email: string,
    password: string
  ): Promise<Tokens> {
    const refreshToken = AuthAppService.generateRefreshToken();
    const accessToken = AuthAppService.generateAccessToken(name);
    const cipherPassword = await AuthAppService.cipherPassword(password);

    const auth = new Auth(name, email, cipherPassword, refreshToken);
    await this.repository.register(auth);

    return { accessToken, refreshToken };
  }

  async login(email: string, password: string): Promise<Tokens | null> {
    const auth = await this.repository.findOne({ email });

    if (auth) {
      const isMatchPassword = await AuthAppService.isMatchPassword(
        password,
        auth.password
      );

      if (isMatchPassword) {
        return {
          accessToken: AuthAppService.generateAccessToken(auth.name),
          refreshToken: auth.refreshToken,
        };
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  validateAccessToken(accessToken: string) {
    return AuthAppService.validateAccessToken(accessToken);
  }

  async getNewAccessToken(refreshToken: string): Promise<Tokens | null> {
    const auth = await this.repository.findOne({ refreshToken });

    if (auth) {
      const accessToken = AuthAppService.generateAccessToken(auth.name);
      const newRefreshToken = AuthAppService.generateRefreshToken();

      await this.repository.update(
        { refreshToken },
        { refreshToken: newRefreshToken }
      );

      return { accessToken, refreshToken: newRefreshToken };
    } else {
      return null;
    }
  }
}
