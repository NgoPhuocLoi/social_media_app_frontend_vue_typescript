import type { AxiosInstance } from "axios";
import createApiClient from "./api.service";

class UserService {
  private api: AxiosInstance;
  constructor(isProtected = true) {
    this.api = createApiClient("/user", isProtected);
  }

  async getCurrentUser() {
    return await this.api.get("/current");
  }
}

export default new UserService();
