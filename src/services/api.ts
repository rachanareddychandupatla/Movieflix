import axios from "axios";

const token = "3a45e5e61ca6660ef61c7e232f0acc67";
export const HTTP = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: token,
    }
})