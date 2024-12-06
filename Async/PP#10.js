import { launch } from 'puppeteer';
 (async () => {
   const browser = await launch({
     headless: true
   });
   const page = await browser.newPage();
   await page.
      goto('https://www.oddsportal.com/');
   await page
      .setViewport({ width: 1920, height: 941 });
   await page
      .waitForSelector(
        '.flex:nth-child(2) > .bg-gray-extra_dark > .h-\     [16px\]');
   await page
      .click('.flex:nth-child(2) > .bg-gray-extra_dark > .h-\[16px\]');
   await browser.close();
 })(); 