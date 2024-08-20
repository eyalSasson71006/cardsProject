import React, { createContext, useContext, useEffect, useState } from "react";
import { getToken, getUser } from "../services/localStorageService";

const UserContext = createContext();

export default function UserProvider({ children }) {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(getToken());

	useEffect(() => {
		if (!user) setUser(getUser());
	}, [user]);

	return (
		<UserContext.Provider value={{ user, setUser, token, setToken }}>
			{children}
		</UserContext.Provider>
	);
}

export const useCurrentUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useCurrentUser must be used within provider");
	}
	return context;
};
