const Repository = require('./repository');
const inputs = require("../data/inputs");

class InputRepository extends Repository {

    async initInputs() {
        for (const input of inputs) {
            await this.instance.post('/', input);
        }
    }

    async updateScriptById(id, script) {
        const response = await this.instance.patch(`/${id}`, {script});
        return response.data;
    }

    async updatePriorityById(id, priority) {
        const response = await this.instance.patch(`/${id}`, {priority});
        return response.data;
    }

    async updateRunById(id, run) {
        const response = await this.instance.patch(`/${id}`, {run});
        return response.data;
    }

}

module.exports = new InputRepository('Input');