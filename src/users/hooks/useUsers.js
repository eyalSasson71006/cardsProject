import { useCallback, useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";
import { deleteUser, editUserData, getAllUsersData, getUserData, login, signup, toggleBusinessUser } from "../services/usersApiService";
import { getUser, removeToken, setTokenInLocalStorage } from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnackbarProvider";
import useAxios from "../../hooks/useAxios";
import normalizeUserToEdit from "../helpers/normalization/normalizeUserToEdit";

export default function useUsers() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const { setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();
    const setSnack = useSnack();

    useAxios();

    const handleLogin = useCallback(async (userLogin) => {
        setError(null);
        setIsLoading(true);
        try {
            const token = await login(userLogin);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            navigate(ROUTES.CARDS);
        } catch (err) {
            setError(err.message);
            setSnack("error", err.message);
        }
        setIsLoading(false);
    }
        , []);

    const handleLogout = useCallback(() => {
        removeToken();
        setUser(null);
    }, []);

    const handleSignup = useCallback(async (user) => {
        setIsLoading(true);
        setError(null);
        try {
            await signup(normalizeUser(user));
            await handleLogin({
                email: user.email,
                password: user.password
            });
            setSnack("success", "Signed up successfully!");
        } catch (err) {
            setError(err.message);
            setSnack("error", err.message);
        }
        setIsLoading(false);
    }, []);

    const getUserById = useCallback(async (id) => {
        setIsLoading(true);
        setError(null);
        try {
            let user = await getUserData(id);
            setIsLoading(false);
            return user;
        } catch (err) {
            setError(err.message);
            setSnack("error", err.message);
        }
        setIsLoading(false);
    }, []);

    const handleUserEdit = useCallback(async (id, user) => {
        setIsLoading(true);
        setError(null);
        try {
            await editUserData(id, normalizeUserToEdit(user));
            setSnack("success", "User edited successfully!");
            setTimeout(() => {
                navigate(ROUTES.USER_PROFILE);
            }, 2000);
        } catch (err) {
            setError(err.message);
            setSnack("error", err.message);
        }
        setIsLoading(false);
    }, []);

    const handleGetAllUsers = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            let users = await getAllUsersData();
            setIsLoading(false);
            return users;
        } catch (err) {
            setError(err.message);
            setSnack("error", err.message);
        }
        setIsLoading(false);
    }, []);

    const handleDeleteUser = useCallback(async (id) => {
        setIsLoading(true);
        setError(null);
        try {
            await deleteUser(id);
            setSnack("success", "User Deleted successfully!");
        } catch (err) {
            setError(err.message);
            setSnack("error", err.message);
        }
        setIsLoading(false);
    }, []);
    
    const handleToggleBusinessUser = useCallback(async (id) => {
        setIsLoading(true);
        setError(null);        
        try {
            await toggleBusinessUser(id);
            setSnack("success", "User Business status changed successfully!");
        } catch (err) {
            setError(err.message);
            setSnack("error", err.message);
        }
        setIsLoading(false);
    }, []);

    return { isLoading, error, handleLogin, handleLogout, handleSignup, getUserById, handleUserEdit, handleGetAllUsers, handleDeleteUser, handleToggleBusinessUser };
}


