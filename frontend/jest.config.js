module.exports = {
    moduleNameMapper: {
        'Components/(.*)$': '<rootDir>/src/components/$1',
        'src/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['js', 'jsx', 'json'],
    moduleDirectories: ['node_modules'],
    // roots: ['.'],
};
