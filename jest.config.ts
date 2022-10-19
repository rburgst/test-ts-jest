import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  // [...]
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
};

export default config;
