const axios = require('axios');
const config = require('../../../config');
const inputs = require("../../data/inputs");

const instance = axios.create({
    baseURL: config.dbApiUrl
});

class DbApiService {

    async getAllInputs() {
        try {
            const response = await instance.get('/Input');
            return response.data;
        } catch (e) {
            console.log(e);
            return [];
        }

    }

    async initInputs() {
        for (const input of inputs) {
            await instance.post('/Input', input);
        }
    }

}


module.exports = new DbApiService();