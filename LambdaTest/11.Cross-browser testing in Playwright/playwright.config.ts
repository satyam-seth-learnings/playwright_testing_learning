import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: "chrome:latest:MacOS Catalina@lambdatest",
      use: {
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "chrome:latest:Windows 10@lambdatest",
      use: {
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"]
      }
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"]
      }
    }
  ],

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
