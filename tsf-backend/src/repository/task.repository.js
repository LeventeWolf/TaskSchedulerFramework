const Repository = require('./repository');

class TaskRepository extends Repository {

    async getTasksByInputId(inputId) {
        const tasks = await this.instance.get(`/?query={"inputId":"${inputId}"}`);
        return tasks.data;
    }

    async deleteTaskByInputIdAndDate(inputId, date) {
        await this.instance.delete(`/?query={"inputId":"${inputId}","date":"${date.toString()}"}`);
    }
}

module.exports = new TaskRepository('Task');