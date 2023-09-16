import React from "react";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

describe("<Header />", () => {
  it("should render correctly with the default props", () => {
    const result = render(<Header />);
    expect(result.container).toHaveTextContent("Associate");
  });

  it("should render correctly with the product name", () => {
    const result = render(<Header />);
    expect(result.getByTestId('associate-id')).toHaveTextContent("Associate");
    expect(result.getByTestId('productivity-id')).toHaveTextContent("Productivity");
  });

  it("should render correctly the avatar icon", () => {
    const result = render(<Header />);
    expect(result.getByTestId('avatar-id')).toBeInTheDocument();
  });

  it("should render correctly associate product logo", () => {
    const result = render(<Header />);
    expect(result.getByAltText('ap-logo')).toBeInTheDocument();
  });

  it("should open logout screen", () => {
    const result = render(<Header />);
    expect(result.getByTestId('avatar-id')).toBeInTheDocument();

    fireEvent.click(result.getByTestId("avatar-id"));
    expect(screen.getByTestId("logout-btn-header")).toBeInTheDocument();
  });

  it("should open logout screen and clikc cancel at last", () => {
    const result = render(<Header />);
    expect(result.getByTestId('avatar-id')).toBeInTheDocument();

    fireEvent.click(result.getByTestId("avatar-id"));

    expect(screen.getByTestId("welcome-id")).toBeInTheDocument();
    expect(screen.getByTestId("logout-btn-header")).toBeInTheDocument();

    fireEvent.click(result.getByTestId("logout-btn-header"));
    expect(screen.getByTestId("logout-message-id")).toBeInTheDocument();
    expect(screen.getByTestId("cancel-btn-id")).toBeInTheDocument();
    expect(screen.getByTestId("logout-btn-id")).toBeInTheDocument();

    fireEvent.click(result.getByTestId("cancel-btn-id"));
  });

  it("should open logout screen and click logout button at last", () => {
    const result = render(<Header />);
    expect(result.getByTestId('avatar-id')).toBeInTheDocument();

    fireEvent.click(result.getByTestId("avatar-id"));

    expect(screen.getByTestId("welcome-id")).toBeInTheDocument();
    expect(screen.getByTestId("logout-btn-header")).toBeInTheDocument();

    fireEvent.click(result.getByTestId("logout-btn-header"));
    expect(screen.getByTestId("logout-message-id")).toBeInTheDocument();
    expect(screen.getByTestId("cancel-btn-id")).toBeInTheDocument();
    expect(screen.getByTestId("logout-btn-id")).toBeInTheDocument();

    fireEvent.click(result.getByTestId("logout-btn-id"));
  });
});