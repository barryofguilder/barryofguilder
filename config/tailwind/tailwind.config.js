'use strict';

const path = require('path');

const appRoot = path.join(__dirname, '../../');
const appEntry = path.join(appRoot, 'app');
const relevantFilesGlob = '**/*.{hbs,html,js}';

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [path.join(appEntry, relevantFilesGlob)],
  theme: {
    screens: {
      xs: '420px',
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        'inner-chunky': 'inset 0 -8px 0 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
