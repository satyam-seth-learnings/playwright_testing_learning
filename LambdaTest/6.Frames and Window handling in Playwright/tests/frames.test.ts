import { expect, test } from "@playwright/test";

test("Interact with frames", async ({ page }) => {

    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No.of frames: " + allframes.length);

    // first way to locate frame
    const myFrame = page.frame("firstFr")
    // // if (myFrame != null) {
    // //     await myFrame.fill("", "")
    // // }
    await myFrame?.fill("input[name='fname']", "satyam")
    await myFrame?.fill("input[name='lname']", "seth")

    expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")

    // second way to locate frame
    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("Satyam");
    await frame.locator("input[name='lname']").fill("Seth");

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("satyam@gmail.com")

    await frame.locator("input[name='fname']").fill("letcode");
    await page.waitForTimeout(3000);
})