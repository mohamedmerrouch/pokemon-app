import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TypeBadge from "../components/TypeBadge";

test("renders type badge correctly", async () => {
  render(<TypeBadge value="fire" />);
  expect(screen.getByTestId("type-badge")).toHaveTextContent("Fire");
  expect(screen.getByTestId("type-badge")).toHaveClass("bg-orange-100");
});
