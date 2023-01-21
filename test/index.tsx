import React, { FC, ReactElement, ReactNode } from "react";
import {
    render as baseRender,
    RenderOptions,
    RenderResult,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */

interface Props {
    children?: ReactNode;
}

export const AllTheProviders: FC<Props> = ({ children }) => {
    return <>{children}</>;
};

const render = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "queries">,
): RenderResult =>
    baseRender(ui, { wrapper: AllTheProviders, ...options }) as RenderResult;

// re-export everything
export * from "@testing-library/react";

// override render method
export { render, userEvent };
