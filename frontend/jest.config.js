module.exports = {
    moduleNameMapper: {
        'src/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['js', 'jsx', 'json'],
    moduleDirectories: ['node_modules'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};
