import { Request, Response, NextFunction } from 'express';


export const board_list = (
    req: Request, res: Response, next: NextFunction
) => {
    try {
        res.json({result:'board list'})
    } catch(e) {
        console.log(e)
    }
}