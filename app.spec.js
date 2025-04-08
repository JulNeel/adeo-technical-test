import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { handleArgsAndExecuteProgram } from "./app.js";
import { testData } from "./data.fixture.js";
import * as filterModule from "./commands/filterDataByAnimalsName/filterDataByAnimalsName.js";
import * as countModule from "./commands/getCountedDatas/getCountedDatas.js";

describe("handleArgsAndExecuteProgram", () => {
  let consoleSpy;
  let filterAnimalsSpy;
  let getCountedDatasSpy;
  beforeEach(() => {
    consoleSpy = vi.spyOn(console, "dir");
    filterAnimalsSpy = vi.spyOn(filterModule, "filterDataByAnimalsName");
    getCountedDatasSpy = vi.spyOn(countModule, "getCountedDatas");
  });
  afterEach(() => {
    consoleSpy.mockReset();
    filterAnimalsSpy.mockReset();
    getCountedDatasSpy.mockReset();
  });

  it("should display an error message if there is no argument", () => {
    const args = [];
    handleArgsAndExecuteProgram(args, [...testData]);
    expect(consoleSpy).toHaveBeenCalledWith("This app should be run with at least one argument, please retry.");
  });

  it("should display the data filtered by the animals names", () => {
    const args = ["--filter=ry"];
    const expectedFilteredResult = [
      {
        name: "Uzuzozne",
        people: [
          {
            name: "Lillie Abbott",
            animals: [
              {
                name: "John Dory",
              },
            ],
          },
        ],
      },
      {
        name: "Satanwi",
        people: [
          {
            name: "Anthony Bruno",
            animals: [
              {
                name: "Oryx",
              },
            ],
          },
        ],
      },
    ];
    handleArgsAndExecuteProgram(args, [...testData]);
    expect(consoleSpy).toHaveBeenCalledWith(expectedFilteredResult, { depth: 5 });
  });

  it("should display a no result message if the filtered array is empty", () => {
    const args = ['--filter="zzz"'];
    handleArgsAndExecuteProgram(args, [...testData]);
    expect(consoleSpy).toHaveBeenCalledWith("There is no result for your request.", { depth: 5 });
  });

  it("should display the counts of People and Animals by counting the number of children and appending it in the name", () => {
    const args = ["--count"];
    handleArgsAndExecuteProgram(args, [testData[0]]);
    const expectedCountResult = [
      {
        name: "Dillauti [5]",
        people: [
          {
            name: "Winifred Graham [6]",
            animals: [
              { name: "Anoa" },
              { name: "Duck" },
              { name: "Narwhal" },
              { name: "Badger" },
              { name: "Cobra" },
              { name: "Crow" },
            ],
          },
          {
            name: "Blanche Viciani [8]",
            animals: [
              { name: "Barbet" },
              { name: "Rhea" },
              { name: "Snakes" },
              { name: "Antelope" },
              { name: "Echidna" },
              { name: "Crow" },
              { name: "Guinea Fowl" },
              { name: "Deer Mouse" },
            ],
          },
          {
            name: "Philip Murray [7]",
            animals: [
              { name: "Sand Dollar" },
              { name: "Buzzard" },
              { name: "Elephant" },
              { name: "Xenops" },
              { name: "Dormouse" },
              { name: "Anchovy" },
              { name: "Dinosaur" },
            ],
          },
          {
            name: "Bobby Ristori [9]",
            animals: [
              { name: "Kowari" },
              { name: "Caecilian" },
              { name: "Common Genet" },
              { name: "Chipmunk" },
              { name: "Aardwolf" },
              { name: "Przewalski's Horse" },
              { name: "Badger" },
              { name: "Sand Cat" },
              { name: "Linne's Two-toed Sloth" },
            ],
          },
          {
            name: "Louise Pinzauti [5]",
            animals: [
              { name: "Manta Ray" },
              { name: "Nubian Ibex" },
              { name: "Warbler" },
              { name: "Duck" },
              { name: "Mice" },
            ],
          },
        ],
      },
    ];
    expect(consoleSpy).toHaveBeenCalledWith(expectedCountResult, { depth: 5 });
  });
});
