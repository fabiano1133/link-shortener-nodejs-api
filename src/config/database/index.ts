import { DB_URL } from '@config/dotenv/config';
import mongoose from 'mongoose';

async function createConnection(): Promise<void> {
    try {
        await mongoose.connect(`${DB_URL}`);
        console.log({
            message: `Database is connected`,
        });
    } catch (error) {
        console.log({ messageError: error });
    }
}

createConnection();
