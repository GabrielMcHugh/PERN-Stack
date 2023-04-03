export = {
    development: {
        client: "postgresql",
        connection: {
            host: "localhost",
            post: "5432",
            database: "todorius_dev",
            user: "emanual",
            password: "password"
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: __dirname + "/migrations",
            tableName: "knex_migrations",
            extension: "ts"
        }
    }
} as { [key: string]: object }