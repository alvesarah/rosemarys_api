/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from "sqlite3";
sqlite3.verbose();
// Serve para fixar um caminho do meu database
import { dirname } from "path";
import { fileURLToPath } from "url";
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";

// Criando o arquivo e/ou abrindo a "conexão" do meu database
const db = new sqlite3.Database(filePath);

//==== Portfólio
const PORTFOLIO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PORTFOLIO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "FOTO" TEXT,
    "DESCRICAO" TEXT,
    "DURACAO" INTERGER,
    "CLIENTEID" INTERGER,
    "FUNCIONARIOID" INTERGER
);`;

const ADD_PORTFOLIO_DATA = `
INSERT INTO PORTFOLIO (ID, FOTO, DESCRICAO, DURACAO, CLIENTEID, FUNCIONARIOID) VALUES
    (1, "https://i.pinimg.com/564x/bb/df/c2/bbdfc2de7c3b2e2b79e9fd2eadab9cb2.jpg", "Tatuagem Trash Tattoo, mixed feelings, liquidificador com um coração dentro", 30, 1, 1),
    (2, "https://i.pinimg.com/564x/e7/d2/34/e7d2341414b93632e2fcb50a62b06263.jpg", "Tatuagem Trash Tattoo", 30, 1, 1),
    (3, "https://i.pinimg.com/564x/84/cb/1c/84cb1c3472a8d0b7e7aad1bb824f90ec.jpg", "Piercing no umbigo, jóia de cobra", 15, 2, 2),
    (4, "https://i.pinimg.com/564x/2b/a6/e6/2ba6e6601be1972e6a0913a7fb11df13.jpg", "Piercing Vertical Labret", 15, 3, 2)
`

function criaTablePort(){
    db.run(PORTFOLIO_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de portfolio \n" + error.message);
    });
}

function populaTablePort(){
    db.run(ADD_PORTFOLIO_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de portfolio\n" + error.message);
    });
}

db.serialize(() => {
    criaTablePort();    
    populaTablePort();
});