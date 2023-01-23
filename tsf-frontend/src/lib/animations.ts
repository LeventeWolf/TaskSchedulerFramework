import {DirectoryRow} from "../components/Templates/Table";

/**
 * Blink Animation on activated repository
 */
export function blinkRepository(link: string) {
    try {
        const row = getRowByLink(link);

        // @ts-ignore
        row.classList.add('blink');
        // @ts-ignore
        delay(1000).then(() => row?.classList.remove('blink'));
    } catch (error: any) {
        console.log(error.toString());
    }
}

/**
 * OnClick: ShowResults animate appended rows appearance
 * @param link repository link
 * @param directories results to animate
 */
export async function animateShownDirectories(link: string, directories: DirectoryRow[]) {
    const repositoryRow = getRowByLink(link);

    let directoryRow = repositoryRow?.nextSibling;

    for (const directory of directories.reverse()) {
        if (directoryRow?.childNodes[1].textContent !== directory.content.date) {
            console.log('[Animations] Error in ShownDirectories: Not in order!');
            console.log('textContent: ', directoryRow?.childNodes[1].textContent);
            console.log('date: ', directory.content.date);
            return
        }

        // @ts-ignore
        // directoryRow.classList.add('blink');

        await delay(30);

        // @ts-ignore
        directoryRow.classList.remove('directory');
        // @ts-ignore
        directoryRow.classList.add('smooth');

        // Go to next sibling
        directoryRow = directoryRow.nextSibling;
    }
}


// Helpers

function getRowByLink(link: string): ChildNode | undefined {
    const table = document.getElementById('repositoryTable');
    const tbody = table!.childNodes[1];

    // @ts-ignore
    for (const row of tbody.childNodes) {
        const rowLink: any = row.childNodes[1].childNodes[1].href;

        if (rowLink === link) {
            return row;
        }
    }

    throw new Error(`not found row by link: ${link}`)
}

export function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}
