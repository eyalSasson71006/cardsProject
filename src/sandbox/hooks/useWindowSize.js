import React, { useEffect, useState } from 'react';

export default function useWindowSize() {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    const handleResize = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    useEffect(() => {
        return (
            window.removeEventListener("resize", handleResize)
        );
    }, [width, height]);


    return { width, height };
}
