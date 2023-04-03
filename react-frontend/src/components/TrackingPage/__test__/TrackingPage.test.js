import React from "react";
import { render, screen } from "@testing-library/react";

import TrackingPage from "../TrackingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders tracking page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TrackingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("tracking-datatable")).toBeInTheDocument();
    expect(screen.getByRole("tracking-add-button")).toBeInTheDocument();
});
