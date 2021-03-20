import { createConnection } from "mysql-await";
import { configDatabase } from "./database";
export const database = createConnection(configDatabase);
