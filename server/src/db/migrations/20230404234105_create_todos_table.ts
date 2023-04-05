import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("todos", (table) => {
        table
            .uuid("id")
            .primary()
            .notNullable()
            .defaultTo(knex.raw("uuid_generate_v4()"))
    })
}


export async function down(knex: Knex): Promise<void> {
}

