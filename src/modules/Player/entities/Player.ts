import { v4 as uuidV4 } from 'uuid';

class Player {

  id: string;
  username: string;
  money: number;
  wood: number;
  metal: number;
  hungry: boolean;
  thrist: boolean;
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.hungry = false;
      this.thrist = false;
    }
  }
}

export { Player };