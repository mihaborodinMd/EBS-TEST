const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} */
module.exports = {
  testEnvironment: "jsdom", // ← важно для React
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy", // ← позволяет импортировать стили без ошибок
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // ← подключим расширения для тестов
};
