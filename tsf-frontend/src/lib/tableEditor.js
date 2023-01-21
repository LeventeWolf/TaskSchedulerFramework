const axios = require('axios');

export class TableEditor {

    constructor(repositories, setRepositories) {
        this.setRepositories = setRepositories;
        this.repositories = repositories;
        this.config = {
            logger: false,
        }
        this.selected = undefined;
        this.selectedCachedContent = undefined;
        this.previous = undefined;
        this.onMouse = undefined;
        this.runTable = undefined;
        this.columns = undefined;

        this.init();
        this.initListeners();
    }

    init() {
        let initClick = () => {
            document.querySelectorAll('td').forEach(item => {
                item.addEventListener('click', event => {
                    this.toggleStart(event)
                })
            })
        }

        let initSetFocusOnMouseHover = () => {
            document.querySelectorAll('td').forEach(item => {
                item.addEventListener('mouseover', event => {
                    if (this.selected === undefined) {
                        this.onMouse = event;
                    }
                });
            })
        }

        let initTableColumns = () => {
            this.runTable = document.getElementById('repositoryTable');
            this.columns = this.runTable.firstChild.firstChild.childNodes;
        }

        initClick();

        initSetFocusOnMouseHover();

        initTableColumns();

    }

    initListeners() {
        console.log('Adding event listeners')
        // Deprecated: this feature is no longer recommended.
        // document.addEventListener('onkeypress', typingOnSelectedCell)
        document.onkeypress = this.typingOnSelectedCell;

        window.addEventListener("keydown", (e) => {
            const removeInputOnEscape = (selected) => {
                let input = this.selected.firstChild;

                if (this.selected.innerHTML.includes('<input')) {
                    this.selected.removeChild(input);
                    this.selected.value = '';
                }
            }

            const restoreCachedValue = (selected) => {
                this.selected.textContent = this.selectedCachedContent;
            }

            if (e.key === "Escape") {
                if (this.selected === undefined) return;

                this.log("[ESCAPE] Removing selection:")
                this.removeBorder(this.selected);
                removeInputOnEscape(this.selected);
                restoreCachedValue(this.selected);

                this.selected = undefined;
                this.previous = undefined;

                this.setFocus(document.getElementById('runTable'))
            }

            if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
                e.preventDefault();
            }

        }, false);

        document.addEventListener('onkeydown', this.checkKey)
    }

    log(message) {
        return;
    }

    setFocus(element) {
        element.focus();
    }

    removeKeyDownListeners() {
        document.onkeydown = '';
    }

    typingOnSelectedCell = (event) => {
        // if there isn't a this.selected cell
        if (this.selected === undefined) return;

        // TODO: submit on enter
        if (event.keyCode === 13) {
            if (this.selected.firstChild.tagName !== 'INPUT') {
                return
            }

            this.submitInput(this.selected);
            return;
        }

        const removeCompleteInputOnFirstType = () => {
            if (document.activeElement.tagName === 'BODY') {
                this.selected.firstChild.value = '';
            }
        }

        removeCompleteInputOnFirstType();

        if (this.selected.firstChild.tagName === 'INPUT') {
            this.setFocus(this.selected.firstChild);
        } else {
            // TODO: Fix Bug -> Edit cell, then submit, then press key results stuck arrow/writing
            this.setFocus(this.selected);
        }

        this.removeKeyDownListeners();
    }

    convertToInput(element) {
        let content = element.textContent;

        if (content.includes('<input')) return;

        element.innerHTML = `<input class="cellInput" value="${content}"/>`
        element.style.userSelect = 'text';
    }

    submitInput = (cell) => {
        const column = this.columns[cell.cellIndex].textContent.toLowerCase();
        const value = cell.firstChild.value;
        const name = cell.parentElement.childNodes[1].textContent.trim();

        // update changed cell in database
        const updateDatabase = async () => {
            axios.post('http://localhost:3001/api/update-cell', {name, column, value})
                .then(function (response) {
                    console.log('Updated!')
                })
                .catch(function (error) {
                    console.log('Error: Updating!');
                });
        }

        // modify state
        updateDatabase().then(() => {
            let repositories_copy = [...this.repositories]

            let filtered_repository = repositories_copy.find(function (repository) {
                if (repository.name === name) {
                    return repository
                }
            });

            filtered_repository[column.toLowerCase()] = value;

            this.setRepositories(repositories_copy)
        });

        // change <input> to <td>
        cell.removeChild(cell.firstChild);

        // set text content to <td>
        cell.textContent = value;

        // enable moving with arrowkeys
        document.onkeydown = this.checkKey;
    }

    removeInput(element) {
        // !Note: element should be <td> with <input> as a firstChild
        let input = element.firstChild;

        if (element.innerHTML.includes('<input')) {
            element.removeChild(input);
            element.textContent = input.value;
        }
    }

    addBorder = (element) => {
        this.log('Border added!');

        element.style.border = "2px solid #0DCAF0";
    }

    removeBorder(element) {
        this.log('Border removed!');

        element.style.border = '';
    }

    toggleStart = (event) => {
        // mounted to: <td onClick="toggleStart()">
        document.onkeydown = this.checkKey;

        // if clicked on nothing
        if (event === undefined) return;

        let element = event.target;

        // if clicked on the same cell
        if (this.previous !== undefined) {
            if (element.tagName !== this.previous.tagName) {
                return;
            }
        }

        element.id = 'start';

        this.selected = element;

        // Remove previous border & Remove input
        if (this.previous !== undefined) {
            this.removeBorder(this.previous)
            this.removeInput(this.previous)
        }

        this.previous = element;

        this.addBorder(this.selected);
        this.convertToInput(this.selected);

        const cachePreviousValue = () => {
            this.selectedCachedContent = this.selected.firstChild.value;
        }

        cachePreviousValue()


    }

    checkKey = (e) => {
        const toggleBorder = (previous) => {
            if (previous != null) {
                this.removeBorder(this.selected)
                this.removeInput(this.selected)

                previous.focus();
                this.addBorder(previous)
                this.convertToInput(previous);

                this.selected = previous;

                // TODO implement scrolling
            }
        }


        if (this.selected === undefined && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].indexOf(e.code) > -1) {
            this.toggleStart(this.onMouse);
            return;
        }

        e = e || window.event;
        if (e.keyCode === 38) {
            // up arrow
            let idx = this.selected.cellIndex;
            let nextrow = this.selected.parentElement.previousElementSibling;
            if (nextrow != null) {
                this.previous = nextrow.cells[idx];
                toggleBorder(this.previous);
            }
        } else if (e.keyCode === 40) {
            // down arrow
            let idx = this.selected.cellIndex;
            let nextrow = this.selected.parentElement.nextElementSibling;
            if (nextrow != null) {
                this.previous = nextrow.cells[idx];
                toggleBorder(this.previous);
            }
        } else if (e.keyCode === 37) {
            // left arrow
            this.previous = this.selected.previousElementSibling;
            toggleBorder(this.previous);
        } else if (e.keyCode === 39) {
            // right arrow
            this.previous = this.selected.nextElementSibling;
            toggleBorder(this.previous);
        }
    }
}