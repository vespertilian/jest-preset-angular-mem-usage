module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coverageProvider: 'v8',
  workerIdleMemoryLimit: '512MB',
};
