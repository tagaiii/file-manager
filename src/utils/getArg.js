const args = process.argv.slice(2);

export const getArg = (key) => {
  const prefix = `--${key}=`;
  const match = args.find((arg) => arg.startsWith(prefix));

  return match.slice(prefix.length);
};
