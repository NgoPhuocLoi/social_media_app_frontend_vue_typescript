export interface User {
  _id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  postNum: Number;
  followerNum: Number;
  followingNum: Number;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  content: string;
  likeNum: Number;
  commentNum: Number;
  isPublished: Number;
  createdAt: string;
  updatedAt: string;
  userId: User;
}
