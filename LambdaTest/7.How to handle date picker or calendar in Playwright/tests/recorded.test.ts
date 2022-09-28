import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    // Go to https://ecommerce-playground.lambdatest.io/
    await page.goto('https://ecommerce-playground.lambdatest.io/');

    // Click text=Login
    await page.hover('//a[@data-toggle="dropdown"]//span[contains(.,"My account")]');
    await page.locator('text=Login').click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

    // Click [placeholder="E-Mail Address"]
    await page.locator('[placeholder="E-Mail Address"]').click();

    // Fill [placeholder="E-Mail Address"]
    await page.locator('[placeholder="E-Mail Address"]').fill('ajz46428@cdfaq.com');

    // Press Tab
    await page.locator('[placeholder="E-Mail Address"]').press('Tab');

    // Fill [placeholder="Password"]
    await page.locator('[placeholder="Password"]').fill('qwertyuiop');

    // Click input:has-text("Login")
    await page.locator('input:has-text("Login")').click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

    // Click text=Edit your account information >> i
    await page.locator('text=Edit your account information >> i').click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/edit');

    // Click [placeholder="First Name"]
    await page.locator('[placeholder="First Name"]').click();

    // Fill [placeholder="First Name"]
    await page.locator('[placeholder="First Name"]').fill('abcd');

    // Click text=Continue
    await page.locator('text=Continue').click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

    // Click span:has-text("Logout")
    await page.hover('//a[@data-toggle="dropdown"]//span[contains(.,"My account")]');
    await page.locator('span:has-text("Logout")').click();
    // await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login'); // fails

});