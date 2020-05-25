async function Parse( page, phone)
{
 await page.goto("https://eda.yandex/");

 await page.waitFor(100);

await page.click('#root > div > header > div > button');

await page.type('body > div:nth-child(6) > div > div > div.DesktopModal_body > div > div.DesktopConfirm_root > div.DesktopConfirm_phone > div > input',  phone, {delay: 100});

await page.click('body > div:nth-child(6) > div > div > div.DesktopModal_body > div > div.DesktopConfirm_root > div.DesktopConfirm_phone > button > span');


};
module.exports.Parse = Parse;