import { connect } from 'mongoose';

export async function run() {
    try {
        await connect('mongodb://localhost:27017/link');
        console.log(`database_connected`);
    } catch (error) {
        console.log(`MessaError${error}`);
    }
}
run();
