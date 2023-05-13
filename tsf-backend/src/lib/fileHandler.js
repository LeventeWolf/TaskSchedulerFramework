const path = require('path');
const fs = require('fs');
const csv = require("csvtojson");
const { readdirSync } = require('fs');

const STATISTICS_FILE = 'statistics'
const TSF_ABS_PATH = './'
const scriptFolderPath = './scripts';

/**
 *
 * @param repository : repositoryContent
 * @param resultDirectory: can be 'results' / 'mapping-results'
 * @returns {[]}
 */
function readFolders(repository, resultDirectory) {
    const results = []
    const resultDirectoriesPath = path.join(TSF_ABS_PATH, resultDirectory, repository.name)

    const directories = fs.readdirSync(resultDirectoriesPath, {withFileTypes: true});

    directories.forEach(directory => {
        const statistics_path = path.join(resultDirectoriesPath, directory.name, STATISTICS_FILE)

        let statistics;

        try {
            const statistics_raw = fs.readFileSync(statistics_path, {withFileTypes: true});
            statistics = JSON.parse(statistics_raw);
        } catch (error) {
            // If directory exists but no statistics, create empty statistics with date
            console.log('[FH] Statistics not exists: ', directory.name)
            console.log('[FH] Sending back empty statistics')
            statistics = {
                from: 'tsf',
                date: directory.name,
                input: repository.input,
                name: repository.name,
                note: 'statistics not found'
            }

        }

        results.push(statistics)
    });

    results.reverse();

    return results;
}

/**
 * Delete given folder from local machine
 * @param repositoryName: eg.: ExampleLib
 * @param directoryDate eg.: 2020.01.01
 * @param resultDirectoryName: eg.: 'results' or 'mapping-results'
 */
function deleteRepositoryResultDirectory(repositoryName, directoryDate, resultDirectoryName) {
    console.log(`repository Name: ${repositoryName}`)
    console.log(`directory Date: ${repositoryName}`)

    const targetDirectory = path.join(TSF_ABS_PATH, resultDirectoryName, repositoryName, directoryDate);

    fs.rmdirSync(targetDirectory, {recursive: true});
    console.log(`[FH] deleted ${targetDirectory}`);
}

function readScriptFolders() {
    const getDirectories = source =>
        readdirSync(source, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

    return getDirectories(scriptFolderPath);
}

// Results

function getAllResults() {
    const root = 'results';

    const explorer = {
        name: root,
        isFolder: true,
        isExpanded: false,
        items: []
    }

    const directories = fs.readdirSync(path.join(TSF_ABS_PATH, root), {withFileTypes: true});

    directories.forEach(directory => {
        const item = {
            name: directory.name,
            isFolder: true,
            isExpanded: false,
            items: []
        }

        explorer.items.push(item);
    })

    return explorer;
}

function getRepositoryResult(repository, date) {
    const root = path.join('results', repository);

    const explorer = {
        name: repository,
        isFolder: true,
        isExpanded: true,
        items: []
    }

    const directories = fs.readdirSync(path.join(TSF_ABS_PATH, root), {withFileTypes: true});

    directories.forEach(directory => {
        const item = {
            name: directory.name,
            isFolder: true,
            isExpanded: true,
            items: []
        }

        explorer.items.push(item);
    })

    return explorer;
}

function getDirectoryFiles(updatedPath) {
    const explorer = [];

    const files = fs.readdirSync(path.join(TSF_ABS_PATH, updatedPath), {withFileTypes: true});

    files.forEach(file => {
        if (file.isDirectory()) {
            const directory = {
                name: file.name,
                isFolder: true,
                isExpanded: false,
                items: []
            }

            explorer.push(directory);
        } else {
            const other_file = {
                name: file.name,
                isFolder: false,
                isExpanded: false,
            }

            explorer.push(other_file);
        }
    })


    return explorer;
}

const recursiveWalk = function (dirPath, explorer) {
    const files = fs.readdirSync(dirPath, {withFileTypes: true});

    files.forEach(file => {
        if (file.isDirectory()) {
            console.log('> ' + file.name);

            const other_file = {
                name: file.name,
                isFolder: true,
                isExpanded: false,
                items: []
            }

            explorer.items.push(other_file);

            recursiveWalk(path.join(dirPath, file.name), other_file);
            return
        }

        const other_file = {
            name: file.name,
            isFolder: false,
            isExpanded: false,
        }

        explorer.items.push(other_file);
    })

    return files;
}

function readJSON(jsonPath) {
    const rawdata = fs.readFileSync(path.join(TSF_ABS_PATH, jsonPath));
    const result = JSON.parse(rawdata);

    return result;
}

async function readCsv(csvPath) {
    const fullPath = path.join(TSF_ABS_PATH, csvPath)

    let result;

    await csv().fromFile(fullPath)
        .then(jsonArrayObj => { //when parse finished, results will be emitted here.
            result = jsonArrayObj;
        })


    return result;
}


module.exports = {
    getDirectoryFiles, readFolders, deleteRepositoryResultDirectory, getRepositoryResult,
    getAllResults, readJSON, readCsv, readScriptFolders
}