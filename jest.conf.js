const path = require('path')

module.exports = {
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/water/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/setup'],
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(js)$",
  collectCoverage: true,
  collectCoverageFrom: [
    'water/**/*.{vue}'
  ]
}
