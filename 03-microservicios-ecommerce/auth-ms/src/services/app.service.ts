import yenv from "yenv";
const env = yenv();

export default class {
  static get PORT(): number {
    return env.PORT || process.env.PORT || 3000;
  }

  static get MONGO_HOST(): string {
    return env.DATABASE.MONGO.HOST || process.env.MONGO_HOST || "127.0.0.1";
  }

  static get MONGO_PORT(): number {
    return env.DATABASE.MONGO.PORT || process.env.MONGO_PORT || 27017;
  }

  static get MONGO_USERNAME(): string {
    return env.DATABASE.MONGO.USERNAME || process.env.MONGO_USERNAME || "root";
  }

  static get MONGO_PASSWORD(): string {
    return env.DATABASE.MONGO.PASSWORD || process.env.MONGO_PASSWORD || "12345";
  }
}
