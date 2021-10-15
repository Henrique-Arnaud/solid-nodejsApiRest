import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { GetAllUsersController } from "./GetAllUsersController";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

const postgresUsersRepository = new PostgresUsersRepository();

const getAllUsersUseCase = new GetAllUsersUseCase(postgresUsersRepository);

const getAllUsersController = new GetAllUsersController(
  getAllUsersUseCase
);

export { getAllUsersUseCase, getAllUsersController};