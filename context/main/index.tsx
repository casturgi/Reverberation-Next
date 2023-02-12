import React, { createContext, useContext, Dispatch } from "react";
import { useMainReducer } from "./reducers";
import { Actions, MainContext } from "@context/main/mainContext";
import { OnAfterAction } from "./afterware";
import { OnBeforeAction } from "./middleware";
import { ToastMessage } from "./toastMessage";

const initialState = {
    message: undefined,
    messageType: undefined,
    messageLinkText: undefined,
    messageLinkURL: undefined,
};

const mainContext = createContext<{
    state: MainContext;
    dispatch: Dispatch<Actions>;
}>({
    state: initialState,
    dispatch: () => null,
});

const { Provider } = mainContext;

const MainContextProvider = ({
    ...props
}: Record<string, unknown>): JSX.Element => {
    const [state, dispatch] = useMainReducer(
        initialState,
        [OnBeforeAction],
        [OnAfterAction],
    );

    return <Provider value={{ state, dispatch }} {...props} />;
};

const useMainContext = (): any => {
    return useContext(mainContext);
};

export { MainContextProvider, useMainContext, ToastMessage };
