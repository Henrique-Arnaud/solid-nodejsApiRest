import { User } from "../entities/User";

export interface IGetAllUsersRepository{
  findAll(): Promise<User[]>;
}