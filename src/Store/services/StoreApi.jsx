import axios from "axios";
const getAllCategory = async () => {
    const api = `https://falth-api.vercel.app/api/category`
    const response = await axios.get(api);
    return response.data;
}
export {
    getAllCategory,
}