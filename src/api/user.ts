import { Router } from 'express'
import * as user from '../controller/user';

const router = Router();


router.post('/join', user.user_join);

export default router;