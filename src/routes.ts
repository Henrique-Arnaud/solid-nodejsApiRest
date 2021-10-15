import { Response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { getAllUsersController } from "./useCases/GetAllUsers";

const router = Router();

router.post('/user', (request, response)=>{
  return createUserController.handle(request, response);
});

router.get('/users', (response: Response)=>{
  return getAllUsersController.handle(response);
})

export { router }