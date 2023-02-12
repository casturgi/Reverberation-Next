// import {
//   actions for switch statement
// } from "./actions";
import { Actions, MainContext } from "./mainContext";
import { Dispatch } from "react";

export const OnBeforeAction = async (
    action: Actions,
    state: MainContext,
    dispatch: Dispatch<Actions>,
): Promise<void> => {
    switch (action.type) {
        default: {
            return;
        }
    }
};
