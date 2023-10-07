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

  async getPostById(postId: string) {
    return await this.api.get("/" + postId);
  }

  async createNewPost(data: { title: string; content: string }) {
    return await this.api.post("/new-post", data);
  }

  async publishPost(postId: string, data: any) {
    return await this.api.post("/publish", { ...data, postId });
  }

  async unpublishPost(postId: string) {
    return await this.api.put("/" + postId, { isPublished: false });
  }

  async updatePostById(postId: string, data: any) {
    return await this.api.put("/" + postId, data);
  }

  async deletePostById(postId: string) {
    return await this.api.delete("/" + postId);
  }
}

export default new PostService();
