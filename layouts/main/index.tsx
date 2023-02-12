import React, { ReactNode } from "react";
import { MainContextProvider, ToastMessage } from "@context/main";

type MainLayoutProps = {
    children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
    return (
        <MainContextProvider>
            <div className="layout-wrapper layout-wrapper--fixed-header">
                <main id="mainContent" role="main" tabIndex={-1}>
                    {children}
                </main>
            </div>
            <ToastMessage />
        </MainContextProvider>
    );
};
