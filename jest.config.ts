// jest.config.ts
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js app
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust to your tsconfig paths
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  transform: {
  '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './jest.babel.config.js' }],
}

};

module.exports = createJestConfig(customJestConfig);
