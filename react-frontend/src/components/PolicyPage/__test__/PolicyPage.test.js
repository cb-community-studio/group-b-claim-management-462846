import React from "react";
import { render, screen } from "@testing-library/react";

import PolicyPage from "../PolicyPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders policy page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PolicyPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("policy-datatable")).toBeInTheDocument();
    expect(screen.getByRole("policy-add-button")).toBeInTheDocument();
});
