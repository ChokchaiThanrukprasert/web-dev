import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

// 6.1. Requesting data from a RESTful Web server API from React
export const findAllTuits = async () => {
  const response = await axios.get(TUITS_API);
  return response.data;
}

// 6.3. Deleting data from a RESTful Web server API from Reac
export const deleteTuit = async (tuit) => {
  const response = await axios
    .delete(`${TUITS_API}/${tuit._id}`);
  return response.data;
}

// 6.4. Posting data to a RESTful Web server API from React
export const createTuit = async (tuit) => {
  const response = await axios.post(TUITS_API, tuit)
  return response.data;
}

// 6.5. Updating data in a RESTful Web server API from React
export const updateTuit = async (tuit) => {
  const response = await axios
    .put(`${TUITS_API}/${tuit._id}`, tuit);
  return response.data;
}
