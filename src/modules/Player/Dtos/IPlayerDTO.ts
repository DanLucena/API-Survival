import { Boat } from "../../Boat/entities/Boat";

interface IPlayerDTO {
  username: string;
  money: number;
  wood: number;
  metal: number;
  hungry: boolean;
  thrist: boolean;
  boats: Boat[];
}

export { IPlayerDTO };