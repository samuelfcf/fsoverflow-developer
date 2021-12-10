import express from 'express';
import cors from 'cors';
import router from './router';
import HandleErrors from './middlewares/HandleErrors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(HandleErrors);

export default app;
