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

    async updateRunByRepositoryLink(link, run) {
        const query = `UPDATE Repositories
                       SET run = ${run}
                       WHERE link = '${link}'`;

        await db.pool.query(query)

        console.log("[DATABASE] Update: " + link + " | run -> " + run);
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


    // MAP

    async getAllMapRepositories() {
        const rows = await db.pool.query(`
            SELECT Map.run,
                   Map.link,
                   Repositories.test_framework,
                   Repositories.status as rStatus,
                   Map.status,
                   Map.coverage,
                   Repositories.sm,
                   Map.osm,
                   Map.mdm,
                   Repositories.dm,
                   Map.note,
                   Repositories.hash,
                   Map.date
            FROM Map
                     INNER JOIN Repositories
                                ON Repositories.link = Map.link;
        `);

        return rows.splice(0);
    }

    async updateMapRunByRepositoryLink(link, run) {
        const query = `UPDATE Map
                       SET run = ${run}
                       WHERE link = '${link}'`;

        await db.pool.query(query)

        console.log("[DATABASE-MAP] Update: " + link + " | run -> " + run);
    }

    async updateMapRepository(response) {
        const note = response.note.replace(/'/g, '')

        const query = `
            UPDATE Map
            SET \`date\` = '${response.date}',
                status   = '${response.status}',
                coverage = ${parseInt(response.coverage)},
                osm      = '${response.osm ?? ''}',
                mdm      = '${response.mdm ?? ''}',
                note     = '${note ?? ''}'
            WHERE link = '${response.link}'
        `;

        await db.pool.query(query)

        let message = `[DATABASE-MAP] updateMapRepository: ${response.link}
         date -> ${response.date}
         status -> ${response.status ?? ''}
         coverage -> ${response.coverage ?? ''}
         osm -> ${response.osm ?? ''}
         mdm -> ${response.mdm ?? ''}
         note -> ${response.note ?? ''}
        `

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