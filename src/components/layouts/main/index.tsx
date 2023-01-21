import React, { ReactNode } from "react";
import { Header } from "@components";

type MainLayoutProps = {
    children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
    return (
        <div className="layout-wrapper layout-wrapper--fixed-header">
            <Header />
            <main id="mainContent" role="main" tabIndex={-1}>
                {children}
            </main>
        </div>
    );
};
