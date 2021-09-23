import { Router } from 'express';
import { playerRouter } from './player.routes';

const router = Router();

router.use(playerRouter);

export { router };