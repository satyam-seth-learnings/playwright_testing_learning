import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // "testMatch": ['fixture/fixtest.test.ts'],
  "testMatch": ['pomtest/addToCartUsingFixture.test.ts'],

  use: {
    baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?',
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
