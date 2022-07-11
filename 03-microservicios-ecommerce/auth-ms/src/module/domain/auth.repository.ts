import Auth from "./auth";

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export default interface AuthRepository {
  register(auth: Auth): string;
}
