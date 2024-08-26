import { useCallback, useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";
import { deleteUser, editUserData, getAllUsersData, getUserData, login, signup, toggleBusinessUser } from "../services/usersApiService";
import { getBanList, getUser, removeToken, setBanListInLocalStorage, setTokenInLocalStorage } from "../services/localStorageService";
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

    const checkIfBanned = (userLogin) => {
        let banList = getBanList();
        if (!banList || banList.length == 0) return false;
        let bannedUser = banList.find(user => user.email == userLogin.email);
        if (!bannedUser) return false;
        //check if 24 hours have passed
        const currentTime = new Date().getTime();
        const timeSinceFirstAttempt = currentTime - bannedUser.firstFailedAttempt;
        if (timeSinceFirstAttempt > (24 * 60 * 60 * 1000)) {
            banList.splice(banList.indexOf(bannedUser), 1);
            setBanListInLocalStorage(banList);
            return false;
        }
        return bannedUser.attempts >= 3 ? true : false;
    };

    const addUserToBanList = (userLogin) => {
        let banList = getBanList() || [];
        let bannedUser = banList.find(user => user.email == userLogin.email);
        if (banList.length == 0 || !bannedUser) {
            setBanListInLocalStorage([
                ...banList,
                {
                    email: userLogin.email,
                    attempts: 1,
                    firstFailedAttempt: new Date().getTime()
                }
            ]);
        } else {
            setBanListInLocalStorage(banList.map(user => {
                if (user.email == bannedUser.email) {
                    user.attempts++;
                }
                return user;
            }));
        }

    };

    const handleLogin = useCallback(async (userLogin) => {
        setError(null);
        setIsLoading(true);
        if (checkIfBanned(userLogin)) {
            setSnack("error", "User is Banned, try again tomorrow...");
            return;
        }
        try {
            const token = await login(userLogin);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            navigate(ROUTES.CARDS);
        } catch (err) {
            addUserToBanList(userLogin);
            setError(err.message);
            setSnack("error", err.message);

        }
        setIsLoading(false);
    }
        , []);

    const handleLogout = useCallback(() => {
        try {
            removeToken();
            setUser(null);
        } catch (err) {
            setSnack("error", err.message);
        }
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
            let userData = await toggleBusinessUser(id);
            setSnack("success", `User Business status toggled ${userData.isBusiness ? "ON" : "OFF"} successfully!`);
        } catch (err) {
            setError(err.message);
            setSnack("error", err.message);
        }
        setIsLoading(false);
    }, []);

    return { isLoading, error, handleLogin, handleLogout, handleSignup, getUserById, handleUserEdit, handleGetAllUsers, handleDeleteUser, handleToggleBusinessUser };
}


