// return an array of "flags", wich are key/value object

export const getFlagsFromArgs = (args) => {
  const flags = [];
  args.forEach((arg, index) => {
    if (arg.startsWith("--")) {
      if (arg.includes("=")) {
        flags.push({
          key: arg.split("=")[0].substring(2),
          value: arg.split("=")[1],
        });
      } else {
        flags.push({
          key: arg.substring(2),
          value: args[index + 1] ?? "",
        });
      }
    }
  });
  return flags;
};
