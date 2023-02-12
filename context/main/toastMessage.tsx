import { useEffect } from "react";
import { useMainContext } from ".";
import { CLEAR_MESSAGE } from "./actions";

export const ToastMessage = (): JSX.Element => {
    const {
        state: { message, messageType, messageLinkText, messageLinkURL },
        dispatch,
    } = useMainContext();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({ type: CLEAR_MESSAGE });
        }, 5000);
        return () => clearTimeout(timer);
    }, [message]);

    const toastMessageOfType = () => {
        switch (messageType) {
            case "ERROR":
                return {
                    background: "bg-utility-red",
                    text: "text-white",
                };
            case "SUCCESS":
                return {
                    background: "bg-utility-green",
                    text: "text-white",
                };
            default:
                return {
                    background: "bg-grey-600",
                    text: "text-brand-blue-100",
                };
        }
    };

    const toastStyles = toastMessageOfType();

    return (
        <div
            className={`${
                typeof message !== "undefined" ? "animate-fadeIn" : "hidden"
            } fixed top-[72px] left-0 right-0 z-10`}
        >
            <div
                className={`${toastStyles.background} shadow-lg w-full text-sm pointer-events-auto bg-clip-padding block mb-3`}
                id="toast-message"
                role="alert"
            >
                <div
                    className={`${toastStyles.background} flex justify-center items-center p-[16px] bg-clip-padding rounded-[4px]`}
                >
                    <div className="flex flex-col">
                        <p className={`${toastStyles.text} flex items-center`}>
                            {message}
                        </p>
                        {messageLinkText && messageLinkURL ? (
                            <a
                                className="text-white underline mt-[5px]"
                                href={messageLinkURL}
                                target="_blank"
                            >
                                {messageLinkText}
                            </a>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
