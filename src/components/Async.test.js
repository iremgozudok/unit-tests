import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    test("renders post", async () => {
        // arrange
        render(<Async />);

        // act
        // ... nothing

        // assert
        const listItemElements = await screen.findAllByRole("listitem");
        expect(listItemElements).not.toHaveLength(0);
    })
});
