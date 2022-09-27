import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  "testMatch": ['tests/basicinteractions.test.ts'],

  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  retries: 2,

  reporter: [
    [
      'dot'
    ],
    [
      'json',
      {
        outputFile: 'jsonReports/jsonReporter.json'
      }
    ],
    [
      'html',
      {
        open: 'always'
      }
    ]
  ]

};

export default config;
