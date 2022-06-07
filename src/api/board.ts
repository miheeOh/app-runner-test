import { Router } from 'express';
import * as board from '../controller/board'

const router = Router();


router.get('/list', board.board_list)

export default router