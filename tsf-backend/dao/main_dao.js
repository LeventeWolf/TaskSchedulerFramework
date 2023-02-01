const db = require('../config/db');

class DAO {

    // RUN

    async getAllRepositories() {
        const rows = await db.pool.query(`
            SELECT *
            FROM Repositories
        `);

        return rows.splice(0);
    }

    async updateRunByRepositoryLink(input, run) {
        const query = `UPDATE Repositories
                       SET run = ${run}
                       WHERE input = '${input}'`;

        await db.pool.query(query)

        console.log("[DATABASE] Update: " + input + " | run -> " + run);
    }

    async updatePriorityByRepositoryLink(input, priority) {
        const query = `UPDATE Repositories
                       SET priority = '${priority}'
                       WHERE input = '${input}'`;

        await db.pool.query(query)

        console.log("[DATABASE] Update: " + input + " | priority -> " + priority);
    }

    async updateActiveDirectory(directory) {
        console.log(`[DATABASE] directory date: ${directory.date}`)

        const query = `
            UPDATE Repositories
            SET \`date\` = '${directory.date}',
                \`time\` = ${directory.time ?? null},
                status   = ${directory.status ? "'" + directory.status + "'" : null},
                scg      = ${directory.scg ?? null},
                dcg      = ${directory.dcg ?? null},
                sm       = ${directory.sm ?? null},
                dm       = ${directory.dm ?? null},
                note     = ${directory.note ? "'" + directory.note + "'" : null}
            WHERE link = '${directory.link}'
        `;

        const result = await db.pool.query(query);

        if (result.affectedRows === 0) {
            const message = '[DATABASE-RUN] Not affected any rows!';
            console.log(message)
            return message;
        }

        const message = `[DATABASE] {RUN} Update ${directory.link}
            date   -> ${directory.date}
            status -> ${directory.status}
            time   -> ${directory.time}
            scg    -> ${directory.scg}
            dcg    -> ${directory.dcg}
            sm     -> ${directory.sm}
            dm     -> ${directory.dm}
            note   -> ${directory.note}
        `;

        console.log(message)
        return message;
    }


    // EDITOR

    async updateCellByRepositoryLink(data) {
        console.log('value', data.value)
        console.log('column', data.column)
        console.log(`repo: '${data.link}'`)

        const query = `UPDATE Repositories
                       SET ${data.column} = '${data.value}'
                       WHERE link = '${data.link}'`;

        await db.pool.query(query)

        console.log(`[DATABASE] Update: ${data.link} | ${data.column} -> ${data.value}`);
    }


}

module.exports = DAO