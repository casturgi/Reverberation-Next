import React, { ReactNode } from "react";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { NextPage } from "next";
import "@styles/global.scss";

import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";

import { Session } from "next-auth";

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
        <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
            <PrismicPreview repositoryName={repositoryName}>
                <SessionProvider
                    session={pageProps.session}
                    refetchInterval={30 * 60}
                >
                    {getLayout(<Component {...pageProps} />)}
                </SessionProvider>
            </PrismicPreview>
        </PrismicProvider>
    );
}
