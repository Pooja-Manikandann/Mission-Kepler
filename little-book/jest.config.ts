import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageDirectory: 'coverage',
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    coverageThreshold: {
        global: {

            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['fileMock.js'],
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    setupFilesAfterEnv: ['./src/setupTests.ts'],
    moduleNameMapper: {
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|scss)$':
            '<rootDir>/src/components/__tests__/__mocks__/fileMock.js',
        '^@/(.*)$': '<rootDir>/src/$1',
        'src/(.*)$': '<rootDir>/src/$1',
    },
    coveragePathIgnorePatterns: [
        '<rootDir>/src/services',
        '<rootDir>/src/app.tsx',
        '<rootDir>/src/declarations.d.ts',
        '<rootDir>/src/index.tsx',
        '<rootDir>/src/utils',
        '<rootDir>/src/constants',
        '<rootDir>/src/types',
        '<rootDir>/src/store',
    ],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    transformIgnorePatterns: [
        '/node_modules/(?!(react-toastify)/)',
        '\\.pnp\\.[^\\/]+$',
    ],
    globals: {},
};
export default config;