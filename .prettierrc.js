'use strict';

module.exports = {
  singleQuote: true,
  overrides: [
    {
      files: 'app/**/*.hbs',
      options: {
        singleQuote: false,
      },
    },
  ],
};
