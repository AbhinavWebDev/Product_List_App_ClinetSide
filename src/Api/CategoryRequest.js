import axios from "axios";

const API = axios.create({ baseURL: `${ process.env.REACT_APP_BACKEND_URL }` });

export const addcategory = (data) => API.post("/category", data);
export const getcategory = (data) => API.get("/category", data);
