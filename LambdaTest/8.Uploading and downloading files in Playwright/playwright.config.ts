import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  "testMatch": ['tests/uploadDownload.test.ts'],

  use: {
    headless: false,
    screenshot: 'on',
    video: 'on',
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
