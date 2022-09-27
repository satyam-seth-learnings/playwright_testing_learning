import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // "testMatch": ['tests/alerts.test.ts'],
  "testMatch": ['tests/dropdown.test.ts'],

  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      slowMo: 1000
    }
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
        open: 'never'
      }
    ]
  ]

};

export default config;
