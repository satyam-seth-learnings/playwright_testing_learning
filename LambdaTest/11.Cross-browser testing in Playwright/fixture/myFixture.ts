import { test as myTest } from "@playwright/test";

// type satyam = {
//     age: number,
//     email: string
// }

const myFixtureTest = myTest.extend<{
    age: number,
    email: string
}>({
    age: 27,
    email: "satyam@email.com"
})

export const test = myFixtureTest;