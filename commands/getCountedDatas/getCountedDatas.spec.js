import { describe, expect, it } from "vitest";
import { getCountedDatas } from "./getCountedDatas.js";

describe("filterDataByAnimalsName", () => {
  it("should return only animals containing the pattern passed as argument", () => {
    const initialData = [
      {
        name: "Dillauti",
        people: [
          {
            name: "Winifred Graham",
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
            name: "Blanche Viciani",
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
            name: "Philip Murray",
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
        ],
      },
      {
        name: "Tohabdal",
        people: [
          {
            name: "Effie Houghton",
            animals: [
              { name: "Zebra" },
              { name: "Ring-tailed Lemur" },
              { name: "Fly" },
              { name: "Blue Iguana" },
              { name: "Emu" },
              { name: "African Wild Ass" },
              { name: "Numbat" },
            ],
          },
          {
            name: "Essie Bennett",
            animals: [
              { name: "Aldabra Tortoise" },
              { name: "Patagonian Toothfish" },
              { name: "Giant Panda" },
              { name: "Goat" },
              { name: "Quahog" },
              { name: "Collared Lemur" },
              { name: "Aldabra Tortoise" },
            ],
          },
          {
            name: "Owen Bongini",
            animals: [
              { name: "Zebrashark" },
              { name: "Dogs" },
              { name: "Mouse" },
              { name: "Numbat" },
              { name: "African Wild Dog" },
            ],
          },
          {
            name: "Alexander Fleury",
            animals: [
              { name: "Gelada" },
              { name: "Rattlesnake" },
              { name: "Rabbit" },
              { name: "Aardvark" },
              { name: "Duck" },
              { name: "Courser" },
              { name: "Woodpecker" },
            ],
          },
        ],
      },
    ];
    const expectedResult = [
      {
        name: "Dillauti [3]",
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
        ],
      },
      {
        name: "Tohabdal [4]",
        people: [
          {
            name: "Effie Houghton [7]",
            animals: [
              { name: "Zebra" },
              { name: "Ring-tailed Lemur" },
              { name: "Fly" },
              { name: "Blue Iguana" },
              { name: "Emu" },
              { name: "African Wild Ass" },
              { name: "Numbat" },
            ],
          },
          {
            name: "Essie Bennett [7]",
            animals: [
              { name: "Aldabra Tortoise" },
              { name: "Patagonian Toothfish" },
              { name: "Giant Panda" },
              { name: "Goat" },
              { name: "Quahog" },
              { name: "Collared Lemur" },
              { name: "Aldabra Tortoise" },
            ],
          },
          {
            name: "Owen Bongini [5]",
            animals: [
              { name: "Zebrashark" },
              { name: "Dogs" },
              { name: "Mouse" },
              { name: "Numbat" },
              { name: "African Wild Dog" },
            ],
          },
          {
            name: "Alexander Fleury [7]",
            animals: [
              { name: "Gelada" },
              { name: "Rattlesnake" },
              { name: "Rabbit" },
              { name: "Aardvark" },
              { name: "Duck" },
              { name: "Courser" },
              { name: "Woodpecker" },
            ],
          },
        ],
      },
    ];
    expect(getCountedDatas(initialData)).toEqual(expectedResult);
  });
});
