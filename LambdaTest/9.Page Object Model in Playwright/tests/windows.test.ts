import { Page, test } from "@playwright/test";

let facebookPage: Page;

test("Interact with multiple tabs", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    // page url
    console.log(page.url());

    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ]);

    // newWindow url
    console.log(newWindow.url());
    // newWindow.fill("", "")


    // multipage popup window
    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ])

    // wait for load all windows
    await multiPage.waitForLoadState();

    const pages = multiPage.context().pages();
    console.log('No.of tabs: ' + pages.length);

    pages.forEach(tab => {
        console.log(tab.url());
    })

    // get specific tab
    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url()
        if (url == "https://www.facebook.com/lambdatest/") {
            facebookPage = pages[index];
        }
    }
    const text = await facebookPage.textContent("//h1")
    console.log(text);


    // we can also use indexing to get specific tab 
    // await pages[1].fill("", "satyam");
})