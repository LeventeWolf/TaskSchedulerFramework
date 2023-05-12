import Axios from "axios";

interface Input {
    result: string;
    date: Date;
    input: string;
    _id: number;
    time: number;
    priority: string;
    script: string;
    status: string
}

class ApiService {

    async updateInput(input: Input) {
        await Axios.post(`http://localhost:3001/Input`, {_id: input._id, input});
    }

    async saveTask(input: Input) {
        await Axios.post(`http://localhost:3001/Task/save`, {inputId: input._id, ...input});
    }

    async deleteTaskByInputId(inputId, date) {
        await Axios.post(`http://localhost:3001/Task/delete`, {inputId, date});
    }
}

export default new ApiService();