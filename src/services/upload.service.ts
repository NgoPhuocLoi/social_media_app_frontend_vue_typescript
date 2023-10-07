import createApiClient from "./api.service";

class UploadService {
  private api;
  constructor() {
    this.api = createApiClient("/upload", true);
  }

  async uploadImageInPost(postId: string, data: any) {
    return await this.api.post(`/${postId}/image`, data);
  }
}

export default new UploadService();
