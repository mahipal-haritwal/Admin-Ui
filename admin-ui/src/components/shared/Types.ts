export type UserType = "member" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserType;
}
