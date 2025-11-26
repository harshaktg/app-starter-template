import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility function", () => {
  it("merges class names correctly", () => {
    const result = cn("text-red-500", "bg-blue-500");
    expect(result).toBe("text-red-500 bg-blue-500");
  });

  it("handles conditional classes", () => {
    const isActive = true;
    const result = cn("base-class", isActive && "active-class");
    expect(result).toBe("base-class active-class");
  });

  it("removes falsy values", () => {
    const result = cn("text-red-500", false, undefined, null, "bg-blue-500");
    expect(result).toBe("text-red-500 bg-blue-500");
  });

  it("handles Tailwind class conflicts", () => {
    // twMerge should keep the last conflicting class
    const result = cn("p-4", "p-8");
    expect(result).toBe("p-8");
  });

  it("handles empty input", () => {
    const result = cn();
    expect(result).toBe("");
  });

  it("handles array of classes", () => {
    const result = cn(["text-red-500", "bg-blue-500"]);
    expect(result).toBe("text-red-500 bg-blue-500");
  });

  it("handles objects with boolean values", () => {
    const result = cn({
      "text-red-500": true,
      "bg-blue-500": false,
      "font-bold": true,
    });
    expect(result).toBe("text-red-500 font-bold");
  });
});
