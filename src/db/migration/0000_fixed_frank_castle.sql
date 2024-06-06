CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(20),
	"second_name" varchar(20),
	"username" varchar(50) NOT NULL,
	"password" varchar(64) NOT NULL,
	"email" varchar(50),
	"created_at" timestamp (6) with time zone DEFAULT now(),
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
