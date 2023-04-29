const axios = require('axios');
const config = require('../config');

class Repository {

    constructor(Model) {
        if (this.constructor === Repository) throw new Error("Repository classes can't be instantiated.");

        this.instance = axios.create({
            baseURL: `${config.dbApiUrl}/${Model}`
        })

    }

    async create(model) {
        const response = await this.instance.post('/', model);
        return response.data;
    }

    async getAll() {
        const response = await this.instance.get('/');
        return response.data;
    }

    async updateById(id, model) {
        const response = await this.instance.patch(`/${id}`, model);
        return response.data;
    }

    async delete(id) {
        await this.instance.delete(`/${id}`);
    }
}


module.exports = Repository;