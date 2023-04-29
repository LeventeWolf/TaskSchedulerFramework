const Repository = require('./repository');

class TaskRepository extends Repository {

    async getTasksByInputId(inputId) {
        const tasks = await this.instance.get(`/?query={"inputId":"${inputId}"}`);
        return tasks.data;
    }
}

module.exports = new TaskRepository('Task');