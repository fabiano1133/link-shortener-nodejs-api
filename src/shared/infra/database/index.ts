import mongoose from 'mongoose';

async function createConnection(): Promise<void> {
    try {
        await mongoose.connect('mongodb://localhost:27017/url');
        console.log({
            message: `Database is connected`,
        });
    } catch (error) {
        console.log({ messageError: error });
    }
}

createConnection();
