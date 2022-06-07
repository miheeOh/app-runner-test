import { Router } from 'express';
import user from './user';
import board from './board';

const router = Router();

router.use('/user',user)
router.use('/board', board)


export default router;