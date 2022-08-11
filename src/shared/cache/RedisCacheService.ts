// import Redis, { Redis as RedisClient } from 'ioredis';
// import cache from '@config/cache/cache';

// export default class RedisCacheService {
//     private client: RedisClient;

//     constructor() {
//         this.client = new Redis(cache.config.redis);
//     }

//     //set
//     async save(key: string, value: any): Promise<void> {
//         await this.client.set(key, JSON.stringify(value));
//     }
//     //get
//     async recover<T>(key: string): Promise<T | null> {
//         return null;
//     }
//     //remove
//     async invalidate(key: string): Promise<void> {
//         console.log(key);
//     }
// }
