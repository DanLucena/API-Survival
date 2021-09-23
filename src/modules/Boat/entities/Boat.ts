import { v4 as uuidV4 } from 'uuid';

class Boat {

  id: string;
  name: string;
  size: number;
  maxDistance: number;
  maxLoda: number;
  totalDistanceTravaled: number;
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Boat };