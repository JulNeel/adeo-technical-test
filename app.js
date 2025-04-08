#!/usr/bin/env node
import { getCountedDatas } from "./commands/getCountedDatas/getCountedDatas.js";
import { filterDataByAnimalsName } from "./commands/filterDataByAnimalsName/filterDataByAnimalsName.js";
import { data } from "./data.js";
import { getFlagsFromArgs } from "./utils/getFlagsFromArgs.js";

const args = process.argv.slice(2);
handleArgsAndExecuteProgram(args, data);
export function handleArgsAndExecuteProgram(args, data) {
  if (!args.length) {
    console.dir("This app should be run with at least one argument, please retry.");
  }
  const flags = getFlagsFromArgs(args);
  flags.map((flag) => {
    const noResultMessage = "There is no result for your request.";
    switch (flag.key) {
      case "filter":
        const filterResult = filterDataByAnimalsName(data, flag.value);
        console.dir(filterResult.length ? filterResult : noResultMessage, { depth: 5 });
        break;
      case "count":
        const countResult = getCountedDatas(data);
        console.dir(countResult.length ? countResult : noResultMessage, { depth: 5 });
        break;
      default:
        break;
    }
  });
}
