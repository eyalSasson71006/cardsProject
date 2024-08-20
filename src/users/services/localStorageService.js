import { jwtDecode } from "jwt-decode";

const TOKEN = 'my token'

export const setTokenInLocalStorage = (tokenStr)=>{
    localStorage.setItem(TOKEN, tokenStr)
}

export const removeToken = ()=>{
    localStorage.removeItem(TOKEN)
}

export const getToken =()=>{
    return localStorage.getItem(TOKEN)
}

export const getUser =()=>{
    try {
        return jwtDecode(getToken())
    } catch (error) {
        return null
    }
}