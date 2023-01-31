import type { Config } from "jest";
const config: Config = {
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: ['.ts'], // this is required in Jest doc https://jestjs.io/docs/next/configuration#extensionstotreatasesm-arraystring
  transform: {
    "^.+\.m?[tj]sx?$": [
      "ts-jest",
      {
        useESM: true, // this tells `ts-jest` ready to transform files to ESM syntax
      },
    ],
  },
  moduleNameMapper: {
    'preact': '<rootDir>/node_modules/preact/dist/preact.mjs' // tell Jest to give this file to transformer, in this case `ts-jest` is a transformer.
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ]
};
export default config;
