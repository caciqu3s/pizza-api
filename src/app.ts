import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import connect from './config/database';
import routes from './routes';

const app: Application =  express();

// Env Config
dotenv.config();

// Database connection
connect();

app.use(express.json());
app.use(routes);
app.get('/', (req: Request, res: Response) => res.send('hello'));

app.listen(8080, () => console.log('server running'));