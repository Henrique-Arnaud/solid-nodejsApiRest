import { IGetAllUsersRepository } from "../../repositories/IGetAllUsersRepository";

export class GetAllUsersUseCase{
  constructor(
    private usersRepository: IGetAllUsersRepository
  ){}

  async execute() {
    const users = await this.usersRepository.findAll();

    return users;
  }
}