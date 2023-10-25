export type UserProfile = {
  username?: string;
  email?: string;
  id?: string;
  token?: string;
  role?: string;
  isVerified?: boolean;
  createdAt?: string;
};

export enum LOCALSTORAGE_AUTH {
  BEARER_TOKEN = "BT",
  USER_PROFILE = "UP",
}
