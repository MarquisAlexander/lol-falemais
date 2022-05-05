import "reflect-metadata"
import { DataSource } from "typeorm"
import { CodesDDD } from "../entity/DDD"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "mm1234",
    database: "telzin",
    synchronize: true,
    logging: false,
    entities: [CodesDDD],
    migrations: [],
    subscribers: [],
})
