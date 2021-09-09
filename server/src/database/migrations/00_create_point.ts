import { Knex } from "knex";


export async function up(knex: Knex){
    // Criar a tabela
    return knex.schema.createTable('point', table =>{
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longetude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
}

export async function down(knex: Knex){
    // Desfaz as coisas
    return knex.schema.dropTable('point')
}