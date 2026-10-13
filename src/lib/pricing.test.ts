import { describe, expect, it } from "vitest";

import { getBillingNote, getMonthlyPrice } from "@/lib/pricing";

describe("getMonthlyPrice", () => {
  it("returns the monthly price when billed monthly", () => {
    expect(getMonthlyPrice(19, false)).toBe(19);
  });

  it("applies the yearly discount and rounds to whole dollars", () => {
    expect(getMonthlyPrice(19, true)).toBe(15);
    expect(getMonthlyPrice(99, true)).toBe(79);
  });

  it("keeps free plans free", () => {
    expect(getMonthlyPrice(0, true)).toBe(0);
  });
});

describe("getBillingNote", () => {
  it("labels free plans", () => {
    expect(getBillingNote(0, true)).toBe("Free forever");
    expect(getBillingNote(0, false)).toBe("Free forever");
  });

  it("shows the yearly total for discounted plans", () => {
    expect(getBillingNote(19, true)).toBe("Billed $180 yearly");
  });

  it("shows monthly billing otherwise", () => {
    expect(getBillingNote(19, false)).toBe("Billed monthly");
  });
});
