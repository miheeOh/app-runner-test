import express,{Request,Response, NextFunction} from 'express';
import body_parser from 'body-parser';
import { generateUploadUrl } from './services/s3';
import cors from 'cors';


const app = express();

// app.use(express.static('public'));
app.use(cors())


app.use(body_parser.urlencoded({extended:false}))

app.get('/s3', async (req,res)=>{
    const url = await generateUploadUrl();
    console.log(url);
    res.json({url})
})

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('main')
})

app.get('/test',(req: Request,res: Response) => {
    res.send('test')
})

app.get('/runner',(req: Request, res: Response) => {
    res.send('runner')
})

app.listen(3000,()=>{
    console.log('server start 3000')
})