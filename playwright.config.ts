import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const { BASE_URL } = process.env;

assert(BASE_URL, 'BASE_URL not found in .env file');

export default defineConfig({

  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 3,
  reporter: 'html',

  use: {
    baseURL: BASE_URL,
    headless: false
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
