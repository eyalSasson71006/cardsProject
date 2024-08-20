import React, { memo, useMemo } from "react";

export default memo(function SimpleComponent() {
	console.log("rendered");
    const data = useMemo(()=>{
        const getData =async()=>{
            return await (
				await fetch("https://restcountries.com/v3.1/all")
			).json();
        }
        return getData
    },[])
    console.log(data);
    
	return <h3>Hello</h3>;
});
