import 'reflect-metadata';

import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
const swaggerFile = require('../../../swagger-output.json');
import bodyParser from 'body-parser';
import morgan from 'morgan';

import '@config/database';
import '@shared/containers';

import routes from '@shared/infra/http/routes';
import { AppError } from '@shared/errors/AppError';

import { errors } from 'celebrate';
import { PORT } from '@config/dotenv/config';
import { config } from 'utils/constants';

const app: Application = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(routes);
app.use(errors());
app.use(morgan('tiny'));
app.use('/swagger-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

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
