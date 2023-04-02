const axios = require('axios');
const config = require('../../config');

class DbApiService {

    constructor(Model) {
        if (this.constructor === DbApiService) throw new Error("DbApiService classes can't be instantiated.");

        this.Model = Model;

        this.instance = axios.create({
            baseURL: `${config.dbApiUrl}/${Model}`
        })

    }

    async create(model) {
        const response = await this.instance.post('/', this.Model, model);
        return response.data;
    }

    async getAll() {
        const response = await this.instance.get('/');
        return response.data;
    }

    async updateById(id, model) {
        const response = await this.instance.get(`/${id}`, model);
        return response.data;
    }

}


module.exports = DbApiService;