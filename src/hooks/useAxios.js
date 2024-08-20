import { useEffect } from "react";
import axios from "axios";
import { useCurrentUser } from "../users/providers/UserProvider";

export default function useAxios() {
    const { token } = useCurrentUser();
    useEffect(() => {
        axios.defaults.headers.common["x-auth-token"] = token;
    }, [token]);
}