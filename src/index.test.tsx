import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import * as Logos from "./index";

describe("NHL Logo Components", () => {
  const logoNames = Object.keys(Logos).filter((key) => key !== "LogoProps");

  it("should export 34 logo components", () => {
    expect(logoNames).toHaveLength(34);
  });

  it.each(logoNames)("should render %s logo with default size", (logoName) => {
    const Logo = Logos[logoName as keyof typeof Logos];
    if (typeof Logo !== "function") return;

    const { container } = render(<Logo />);
    const svg = container.querySelector("svg");

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("width", "100");
    expect(svg).toHaveAttribute("height", "100");
  });

  it.each(logoNames)(
    "should render %s logo with custom size",
    (logoName) => {
      const Logo = Logos[logoName as keyof typeof Logos];
      if (typeof Logo !== "function") return;

      const { container } = render(<Logo size={200} />);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("width", "200");
      expect(svg).toHaveAttribute("height", "200");
    }
  );

  it.each(logoNames)(
    "should pass through additional props to %s logo",
    (logoName) => {
      const Logo = Logos[logoName as keyof typeof Logos];
      if (typeof Logo !== "function") return;

      const { container } = render(
        <Logo data-testid="logo" className="custom-class" />
      );
      const svg = container.querySelector("svg");

      expect(svg).toHaveAttribute("data-testid", "logo");
      expect(svg).toHaveAttribute("class", "custom-class");
    }
  );
});
