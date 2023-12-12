
import { Config } from "@jest/types";

const config: Config.InitialOptions = {
    automock: false,
    collectCoverage: true,
    collectCoverageFrom: [
    "src/**/*.(js, jsx}",
    "src/**/*.(ts, tsx}",
    "!vendor/**/*.js,jsxy",
    "*!**/node_modules/***",
    ],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    coverageProvider: "babel",
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        }
    },
    maxConcurrency: 5,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: true,
    bail: 1,
    testPathIgnorePatterns: ['fileMock.js'],
    setupFilesAfterEnv: ['./src/setupTests.ts'],
    moduleNameMapper: {
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|scss)$':
            '<rootDir>/src/components/__tests__/__mocks__/fileMock.js',
        '^@/(.*)$': '<rootDir>/src/$1',
        'src/(.*)$': '<rootDir>/src/$1',
    },
    coveragePathIgnorePatterns: ['<rootDir>/src/services', '<rootDir>/src/utils'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transformIgnorePatterns: ['/node_modules/(?!(react-toastify)/)', '\\.pnp\\.[^\\/]+$'],
    globals: {},

}
export default config;