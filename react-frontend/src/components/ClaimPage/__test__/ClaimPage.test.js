import React from "react";
import { render, screen } from "@testing-library/react";

import ClaimPage from "../ClaimPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders claim page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ClaimPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("claim-datatable")).toBeInTheDocument();
    expect(screen.getByRole("claim-add-button")).toBeInTheDocument();
});
