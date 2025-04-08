import { getFlagsFromArgs } from "./getFlagsFromArgs";
import { describe, it, expect } from "vitest";

describe("getFlagsFromArgs", () => {
  it('should return an array of key/value object for each argument starting with "--" ', () => {
    const args = ["toto", "tutu", "--filter", "tata", "--filter=hello", "world", "--count", "thanks", "--count"];
    const flags = [
      { key: "filter", value: "tata" },
      { key: "filter", value: "hello" },
      { key: "count", value: "thanks" },
      { key: "count", value: "" },
    ];
    expect(getFlagsFromArgs(args)).toEqual(flags);
  });
});
