import React, { ReactNode } from "react";
import { MainLayout } from "@components";

const Home = (): JSX.Element => {
    return (
        <>
            <h1>test homepage render</h1>
        </>
    );
};

Home.getLayout = function getLayout(page: ReactNode) {
    return <MainLayout>{page}</MainLayout>;
};

export default Home;
