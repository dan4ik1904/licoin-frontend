import axios from "axios";

const api = axios.create({
    baseURL: 'https://licoin.daniyaldobro.ru/api/v1'
})

export default api