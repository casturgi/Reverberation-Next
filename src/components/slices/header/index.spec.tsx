import { render } from "@test";
import { Header } from "./index";
import { SessionProvider } from "next-auth/react";

describe("Header ", () => {
    it("renders without crashing", () => {
        const component = render(
            <SessionProvider
                session={{
                    expires: "1",
                    user: { email: "a", name: "Delta", image: "c" },
                }}
            >
                <Header />
            </SessionProvider>,
        );

        expect(component).toBeTruthy();
    });
});
