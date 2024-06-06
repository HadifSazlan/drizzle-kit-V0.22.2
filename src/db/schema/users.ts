import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 20 }),
  secondName: varchar("second_name", { length: 20 }),
  username: varchar("username", { length: 50 }).unique().notNull(),
  password: varchar("password", { length: 64 }).notNull(),
  email: varchar("email", { length: 50 }),
  createdAt: timestamp("created_at", {
    precision: 6,
    withTimezone: true,
  }).defaultNow(),
});
