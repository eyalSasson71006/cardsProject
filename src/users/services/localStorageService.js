import { jwtDecode } from "jwt-decode";

const TOKEN = 'my token'
const BAN_LIST = "ban list"

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

export const setBanListInLocalStorage = (listObj)=>{
    localStorage.setItem(BAN_LIST, JSON.stringify(listObj))
}

export const getBanList =()=>{
    return JSON.parse(localStorage.getItem(BAN_LIST)) 
}

