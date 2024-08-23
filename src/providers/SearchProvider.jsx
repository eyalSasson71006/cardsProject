import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export default function SearchProvider({ children }) {
	const [searchInput, setSearchInput] = useState("");
	const [searchVisibility, setSearchVisibility] = useState(true);

	return (
		<SearchContext.Provider
			value={{
				searchInput,
				setSearchInput,
				searchVisibility,
				setSearchVisibility,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
}

export const useSearchContext = () => {
	const context = useContext(SearchContext);
	if (!context) {
		throw new Error("useSearchContext must be used within provider");
	}
	return context;
};
