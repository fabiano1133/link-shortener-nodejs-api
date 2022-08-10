import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

import '@shared/infra/database';
import '@shared/containers';

import routes from '@shared/infra/http/routes';
import { AppError } from '@shared/errors/AppError';

import { errors } from 'celebrate';
import { PORT } from '@config/dotenv/config';
import { config } from 'utils/constants';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.messageError,
        });
    }
    console.log(err);
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});

app.listen(`${PORT}`, () =>
    console.log({
        message: `Aplication is Running 🎉😎 => Access in ${config.BASE_URL}`,
    })
);
