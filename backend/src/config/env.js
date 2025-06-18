import "dotenv/config";
// This file is used to load environment variables from a .env file

export const ENV = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
}