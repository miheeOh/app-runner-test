import { Request, Response, NextFunction } from 'express';

export const user_join = (
    req: Request, res: Response, next: NextFunction
) => {
    try {
        res.json({result: 'join'})
    }catch(e) {
        console.log(e)
    }
}