const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  // collectCoverageFrom: [
  //   // 테스트 커버리지를 측정하고자 하는 파일
  //   'src/services/**/*.{js,jsx,ts,tsx}',
  //   'src/utils/*.{js,ts}',
  // ],
  moduleNameMapper: {
    // '@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^.+.(svg)$': 'jest-transform-stub',
    // '^.+\\.svg$': '<rootDir>/svgTransformer.js',
    // '^.+\\.svg$': '<rootDir>/src/icons/svg',
    // '^.+\\.svg$': 'jest-svg-transformer',
    // '^.+\\.svg$': '<rootDir>/svgTransformer.js',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
