import * as dotenv from 'dotenv';

dotenv.config();

export const configuration = {
    port: parseInt(process.env.PORT, 10) || 3007,
    host: process.env.HOST,
    database: {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + '/../**/*.entity{.ts}'],
        synchronize: false
    }
};
