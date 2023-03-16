import React , {useState, useEffect} from 'react';
export const useDimensions = () => {
   
    const [width, setWidth] = useState(851);
    const [height, setHeight] = useState(851);
   const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}
useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);

return { width, height};
}