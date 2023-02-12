// import {
//   import actions used in switch here
// } from "./actions";
import { MainContext, Actions } from "./mainContext";
import { Dispatch } from "react";

export const OnAfterAction = async (
    action: Record<string, unknown>,
    state: MainContext,
    dispatch: Dispatch<Actions>,
): Promise<void> => {
    switch (action.type) {
        default: {
            return;
        }
    }
};
