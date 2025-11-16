import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

api.interceptors.response.use(
    (response) => {
        console.log("✅ Requisição bem-sucedida:", response.config.url);
        return response;
    },
    (error) => {
        console.error("❌ Erro na requisição:", error.message);
        return Promise.reject(error);
    }
)

export default api