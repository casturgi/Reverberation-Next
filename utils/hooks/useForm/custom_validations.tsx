export const customValidation = (
    type: "hex-color" | "gradient" | "select-list",
    list?: string[],
    message?: string,
): Record<string, unknown> => {
    switch (type) {
        case "hex-color":
            return {
                custom: {
                    isValid: (value: string): boolean => {
                        return !value || /^#[0-9A-F]{6}$/i.test(value);
                    },
                    message: message
                        ? message
                        : "Please input a color in hex format. ex: '#ffffff'",
                },
            };
            break;
        case "gradient":
            return {
                custom: {
                    isValid: (value: string): boolean => {
                        return (
                            !value ||
                            value.indexOf("linear-gradient(") >= 0 ||
                            value.indexOf("radial-gradient(") >= 0
                        );
                    },
                    message: message
                        ? message
                        : "Please enter a valid css linear-gradient",
                },
            };
            break;
        case "select-list":
            return {
                custom: {
                    isValid: (value: string) => {
                        return (
                            !value ||
                            (typeof list !== "undefined" &&
                                list.indexOf(value) >= 0)
                        );
                    },
                    message: message
                        ? message
                        : "Please choose an option from the drop down",
                },
            };
            break;
        default:
            return {};
    }
};
