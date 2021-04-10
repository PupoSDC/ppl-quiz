const logs: Array<keyof Console> = [
  "assert",
  "clear",
  "count",
  "debug",
  "dir",
  "dirxml",
  "error",
  "exception",
  "group",
  "groupCollapsed",
  "groupEnd",
  "info",
  "log",
  "table",
  "time",
  "timeEnd",
  "timeStamp",
  "trace",
  "warn",
];

const NOOP = () => {};

export const disableLogs = () =>
  logs.forEach((log) => {
    console[log] = NOOP;
  });
