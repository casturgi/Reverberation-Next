import { useState, useEffect } from "react";

// custom hook used to trigger a refresh when any of goup of props value chage.
// output should be mapped to the 'key' attribute of the element you wish to re render
export const useChecksum = (values: any[]): number => {
    const [checksum, setChecksum] = useState(0);

    useEffect(() => {
        setChecksum((checksum) => checksum + 1);
    }, [values]);

    return checksum;
};
