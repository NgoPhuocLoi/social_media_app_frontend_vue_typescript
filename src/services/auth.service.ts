import type { AxiosInstance } from "axios";
import createApiClient from "./api.service";
import type {
  LoginUserPayload,
  RegisterUserPayload,
} from "@/interfaces/payload";

class AuthService {
  private api: AxiosInstance;
  constructor() {
    this.api = createApiClient("/auth");
  }

  async register(payload: RegisterUserPayload) {
    return await this.api.post("/register", payload);
  }

  async login(payload: LoginUserPayload) {
    return await this.api.post("/login", payload);
  }
}

export default new AuthService();
