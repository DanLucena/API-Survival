import { IPlayerDTO } from "../Dtos/IPlayerDTO";

interface IPlayerRepository {
  createUser(username: string): Promise<void>;
  perfil(token: string): Promise<IPlayerDTO>;
  buildBoat(token: string): Promise<void>;
}

export { IPlayerRepository };