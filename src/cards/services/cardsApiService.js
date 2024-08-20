import axios from "axios";
import normalizeCard from "../helpers/normalization/normalizeCard";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

export const getCards =async () => {
    try {
        const response = await axios.get(apiUrl)
        return response.data
    } catch (error) {
        throw new Error(error);
    }
}

export const getCard = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`)
        return response.data
    } catch (error) {
        throw new Error(error);
    }
}

export const getMyCards = async () => {
    try {
        const response = await axios.get(`${apiUrl}/my-cards`)
        return response.data
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteCard = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`)
        return response.data
    } catch (error) {
        throw new Error(error);
    }
}

export const createCard = async (card) => {    
    console.log(card);
    
    try {
        const {data} = await axios.post(apiUrl, normalizeCard(card))        
        return data
    } catch (error) {
        throw new Error(error);
    }
}

export const editCard = async (id, card) => {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, card)
        return response.data
    } catch (error) {
        throw new Error(error);
    }
}

export const changeLikeStatus = async (id) => {
    try {
        const response = await axios.patch(`${apiUrl}/${id}`)  
        return response.data
    } catch (error) {
        throw new Error(error);
    }
}

