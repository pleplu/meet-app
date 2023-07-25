import puppeteer from "puppeteer";

describe('show/hide event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event-item');
    });
  
    afterAll(() => {
      browser.close();
    });

test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event-item .description');
    expect(eventDetails).toBeNull();
    browser.close();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event-item .show-details');
    const eventDetails = await page.$('.event .description');
    expect(eventDetails).toBeDefined();
    browser.close();
  });

  test('User can collapse an event to hide details', async () => {
    await page.click('.event-item .show-details');
    const eventDetails = await page.$('.event-item .description');
    expect(eventDetails).toBeNull();
  });
});