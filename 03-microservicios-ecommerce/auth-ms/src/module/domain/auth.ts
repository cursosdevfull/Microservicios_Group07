export default class Auth {
  readonly email: string;
  readonly password: string;
  readonly refreshToken: string;

  constructor(email: string, password: string, refreshToken: string) {
    this.email = email;
    this.password = password;
    this.refreshToken = refreshToken;
  }
}
