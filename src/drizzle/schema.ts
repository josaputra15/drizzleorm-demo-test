import { pgTable, varchar, uuid} from "drizzle-orm/pg-core"

export const UserTable = pgTable("user", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 225 }).notNull(),
})