import { connection } from "../database.js";

async function insertFinancialEvent(id, value, type) {
    await connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [id, value, type]
    );
}

async function getFinancialsEventsByUserId(id){
    const results = await connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [id]
    );

    return results;
}

export const financialRepository = {
    insertFinancialEvent,
    getFinancialsEventsByUserId
};