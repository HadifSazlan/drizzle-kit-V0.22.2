import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

dotenv.config();

const client = new Client({
  connectionString: process.env.DB_URL,
});

await client.connect();
export const db = drizzle(client);
