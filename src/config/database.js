import { config } from "dotenv";
config();
export const configDatabase = {
  connectionLimit: 10,
  user: process.env.USUARIO_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DB,
};
