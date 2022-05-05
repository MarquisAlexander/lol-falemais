import "reflect-metadata"
import { DataSource } from "typeorm"
import { CodesDDD } from "../entity/DDD"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "mm1234",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [CodesDDD],
    migrations: [],
    subscribers: [],
})
