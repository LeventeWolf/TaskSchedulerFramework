export const loadState = (key, type) => {
    try {
        const state = localStorage.getItem(key);
        if (state === null) {
            return undefined;
        }

        switch (type) {
            case 'string':
                return state;

            default:
                return JSON.parse(state);
        }

    } catch (err) {
        return undefined;
    }
}

export const saveState = (key, state, type) => {
    try {
        switch (type) {
            case 'string':
                localStorage.setItem(key, state);
                return
            default:
                const serializedState = JSON.stringify(state);
                localStorage.setItem(key, serializedState);
        }


    } catch (err) {
        // Ignore write errors.
    }
}