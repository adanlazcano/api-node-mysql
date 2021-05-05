import dotenv from 'dotenv';
dotenv.config();

export const dbOptions = {
    host: process.env.HOST,
    port: process.env.PORT_DB,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
}