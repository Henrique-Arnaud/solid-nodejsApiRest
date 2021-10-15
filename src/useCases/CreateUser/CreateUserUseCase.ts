import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
export class CreateUserUseCase {
  constructor(
    private usersRepository: ICreateUserRepository,
    private mailProvider: IMailProvider
  ){}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if(userAlreadyExists){
      throw new Error('Email já cadastrado no sistema');
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from:{
        name: "Equipe Meu App",
        email: "equipe@live.com"
      },
      subject: "Seja bem-vindo",
      body: "<p>Você já pode fazer login em nossa plataforma.</p>"
    })

    return user;
  }
}