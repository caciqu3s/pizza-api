import express, { Application, Request, Response } from 'express';

const app: Application =  express();

app.get('/', (req: Request, res: Response) => res.send('hello'));

app.listen(8080, () => console.log('server running'));