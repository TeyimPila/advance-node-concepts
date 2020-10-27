const puppeteer = require('puppeteer')

let browser, page;

beforeEach(async () => {
    browser = await puppeteer.launch({
        headless: false
    });
    page = await browser.newPage()
    await page.goto('localhost:3000')
})

afterEach(async () => {
    await browser.close();
})


test('The header has the correct text', async () => {
    const logoText = await page.$eval('a.brand-logo', element => element.innerHTML);

    expect(logoText).toEqual('Blogster');
})

test('Clicking login starts Oauth flow', async () => {
    await page.click('.right a');

    const url = page.url();
    // expect(url).toMatch('/accounts\.google\.com/')
})
