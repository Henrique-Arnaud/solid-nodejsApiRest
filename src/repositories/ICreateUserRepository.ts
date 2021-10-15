import { User } from "../entities/User";

export interface ICreateUserRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<User>;
}