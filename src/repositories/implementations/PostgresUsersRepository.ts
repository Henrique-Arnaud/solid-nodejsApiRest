import { User } from "../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";
import { IGetAllUsersRepository } from "../IGetAllUsersRepository";

export class PostgresUsersRepository implements ICreateUserRepository, IGetAllUsersRepository {
  private users: User[] = [];
  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findAll(): Promise<User[]>{
    return this.users;
  }
}