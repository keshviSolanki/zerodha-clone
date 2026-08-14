import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroHome from "../landing_page/home/HeroHome";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<HeroHome />);
    const heroImage = screen.getByAltText("HeroHome img");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders signup button", () => {
    render(<HeroHome />);
    const signupButtom = screen.getByRole("button", {
      name: "Sign up for free",
    });
    expect(signupButtom).toBeInTheDocument(); // check thse
    expect(signupButtom).toHaveClass("btn-primary");
  });
});
