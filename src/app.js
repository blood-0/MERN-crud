import express from 'express';
import morgan from 'morgan';

const app = express()
app.use(morgan('dev')) // Logger

export default app