import { RefObject, useEffect } from "react";

export const useClickOutside = (
    ref: RefObject<HTMLElement>,
    cb: () => void,
): void => {
    useEffect(() => {
        // trigger cb if click outside
        const handleClickOutside = (event: { target: any }) => {
            if (ref.current && !ref.current.contains(event.target)) {
                cb();
            }
        };
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
};
