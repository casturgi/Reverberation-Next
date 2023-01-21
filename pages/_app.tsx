import React, { ReactNode } from "react";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { NextPage } from "next";
import "@styles/global.scss";

import { Session } from "next-auth";

declare global {
    interface Window {
        analytics: any;
    }
}

type Page<P = Record<string, unknown>> = NextPage<P> & {
    getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps<{
    session: Session;
}> & {
    Component: Page;
};

export default function App({
    Component,
    pageProps,
}: AppPropsWithLayout): JSX.Element {
    const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

    return (
        <SessionProvider session={pageProps.session} refetchInterval={30 * 60}>
            {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
    );
}
