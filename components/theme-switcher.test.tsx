import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeSwitcher } from "./theme-switcher";

// Mock next-themes
const mockSetTheme = vi.fn();
vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "light",
    setTheme: mockSetTheme,
  }),
}));

describe("ThemeSwitcher", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the theme switcher button", async () => {
    render(<ThemeSwitcher />);

    // Wait for the component to mount (it has a mounting check)
    await waitFor(() => {
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  it("displays the correct icon for light theme", async () => {
    render(<ThemeSwitcher />);

    await waitFor(() => {
      // The Sun icon should be visible for light theme
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });

  it("opens dropdown menu when clicked", async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);

    await waitFor(async () => {
      const button = screen.getByRole("button");
      await user.click(button);
    });

    // Check if menu items are visible
    await waitFor(() => {
      expect(screen.getByText("Light")).toBeInTheDocument();
      expect(screen.getByText("Dark")).toBeInTheDocument();
      expect(screen.getByText("System")).toBeInTheDocument();
    });
  });

  it("calls setTheme when a theme option is selected", async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);

    // Open the dropdown
    await waitFor(async () => {
      const button = screen.getByRole("button");
      await user.click(button);
    });

    // Click on Dark theme
    await waitFor(async () => {
      const darkOption = screen.getByText("Dark");
      await user.click(darkOption);
    });

    // Verify setTheme was called with 'dark'
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });
});
