import axios from "axios";

export const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

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
        const response = await axios.post(apiUrl, id);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
}; 