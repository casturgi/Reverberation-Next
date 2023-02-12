import { useReducer, useRef, useEffect, Reducer, Dispatch } from "react";
import {
    ERROR_MESSAGE,
    SUCCESS_MESSAGE,
    INFO_MESSAGE,
    CLEAR_MESSAGE,
} from "./actions";
import { Actions, MainContext } from "./mainContext";

export const reducer: Reducer<MainContext, Actions> = (
    state,
    action,
): MainContext => {
    switch (action.type) {
        case ERROR_MESSAGE: {
            return {
                ...state,
                message: action.message,
                messageType: "ERROR",
                messageLinkText: action.messageLinkText,
                messageLinkURL: action.messageLinkURL,
            };
        }
        case SUCCESS_MESSAGE: {
            return {
                ...state,
                message: action.message,
                messageType: "SUCCESS",
                messageLinkText: action.messageLinkText,
                messageLinkURL: action.messageLinkURL,
            };
        }
        case INFO_MESSAGE: {
            return {
                ...state,
                message: action.message,
                messageType: "INFO",
                messageLinkText: action.messageLinkText,
                messageLinkURL: action.messageLinkURL,
            };
        }
        case CLEAR_MESSAGE: {
            return {
                ...state,
                message: undefined,
                messageType: undefined,
                messageLinkText: undefined,
                messageLinkURL: undefined,
            };
        }
        default: {
            return state;
        }
    }
};

export function useMainReducer(
    initialState: MainContext,
    middlewareFns: ((
        action: Actions,
        state: MainContext,
        dispatch: Dispatch<Actions>,
    ) => void)[],
    afterwareFns: ((
        action: Actions,
        state: MainContext,
        dispatch: Dispatch<Actions>,
    ) => void)[],
): any {
    const [state, dispatch] = useReducer(reducer, initialState);

    // create ref to hold our action
    const actionRef: any = useRef();

    const dispatchFromMiddleware = (action: Actions) => {
        // set actionRef for use in useEffect
        actionRef.current = action;

        // fire reducer to update state
        dispatch(action);
    };

    const dispatchWithMiddleware = (action: Actions) => {
        // fire middleware functions before action executes
        middlewareFns.forEach((middlewareFn) => {
            return middlewareFn(action, state, dispatchFromMiddleware);
        });

        // set actionRef for use in useEffect
        actionRef.current = action;

        // fire reducer to update state
        dispatch(action);
    };

    // Fire afterware functions after each state update
    useEffect(() => {
        // Check if our actionRef action (current) is null or undefined and bail if so
        if (!actionRef.current) return;

        // stash our action in a const and clear ref so that dispatchWithAfterware sets actionRef correctly for any actions that follow.
        const action = actionRef.current;
        actionRef.current = null;

        // call each of our afterware functions in sequence
        afterwareFns.forEach((afterwareFn) => {
            return afterwareFn(action, state, dispatchWithMiddleware);
        });

        // set current action to null to prevent duplicate calls
    }, [afterwareFns, state]);

    return [state, dispatchWithMiddleware];
}
