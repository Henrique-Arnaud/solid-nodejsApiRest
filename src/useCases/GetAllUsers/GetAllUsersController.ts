import { GetAllUsersUseCase } from "./GetAllUsersUseCase";
import { Response, Request } from "express";

export class GetAllUsersController {
  constructor(
    private getAllUsersUseCase: GetAllUsersUseCase
  ) { }
  async handle(response: Response): Promise<Response> {

    try {
      await this.getAllUsersUseCase.execute();
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected Error.'
      });
    }
  }
}