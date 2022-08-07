import { connect } from 'mongoose';

export async function run() {
    try {
        connect('mongodb://localhost:27017/link', () =>
            console.log(`DATA_BASE_CONNECTED`)
        );
    } catch (error) {
        console.log(`MessaError${error}`);
    }
}
run();
