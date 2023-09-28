import createApiClient from "./api.service";

class PostService {
  private api;
  constructor() {
    this.api = createApiClient("/post", true);
  }

  async getAllPostsOfUser(userId: string) {
    return await this.api.get("/all/" + userId);
  }

  async getPublishedPostsOfUser(userId: string) {
    return await this.api.get(`/all/${userId}?published=true`);
  }

  async createNewPost(data: { title: string; content: string }) {
    return await this.api.post("/new-post", data);
  }
}

export default new PostService();
