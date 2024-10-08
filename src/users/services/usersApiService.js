import axios from "axios";

export const apiUrl = "https://cardsserver-6cy7.onrender.com/users";

export const login = async (userLogin) => {
    try {
        const response = await axios.post(apiUrl + "/login", userLogin);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const signup = async (normalizedUser) => {
    try {
        const { data } = await axios.post(apiUrl, normalizedUser);
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getUserData = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const editUserData = async (id, normalizedUser) => {

    try {
        const response = await axios.put(`${apiUrl}/${id}`, normalizedUser);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getAllUsersData = async () => {

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const deleteUser = async (id) => {

    try {
        const response = await axios.delete(`${apiUrl}/${id}`);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const toggleBusinessUser = async (id) => {

    try {
        const response = await axios.patch(`${apiUrl}/${id}`);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
}; 