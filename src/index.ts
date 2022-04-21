import express,{Request,Response} from 'express';


const app = express();


app.get('/test',(req: Request,res: Response) => {
    res.send('test')
})

app.get('/runner',(req: Request, res: Response) => {
    res.send('runner')
})

app.listen(3000,()=>{
    console.log('server start 3000')
})