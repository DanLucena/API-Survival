import { Router } from 'express';

const playerRouter = Router();

playerRouter.get('/create', (req, res) => {
  res.json({ message: 'rota para criação de usuario' });
})

export { playerRouter };