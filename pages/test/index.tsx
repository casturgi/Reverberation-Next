import React, { ReactNode } from "react";
import { MainLayout } from "@components";

const Test = (): JSX.Element => {
    return (
        <>
            <h1>Test Prefetching links</h1>
        </>
    );
};

Test.getLayout = function getLayout(page: ReactNode) {
    return <MainLayout>{page}</MainLayout>;
};

export default Test;
