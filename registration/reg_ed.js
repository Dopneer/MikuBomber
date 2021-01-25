async function Parse( page, phone)
{
 await page.goto("https://eda.yandex.ru/moscow?shippingType=delivery");

 await page.waitFor(100);

await page.click('#root > div > header > div > button');

await page.type('body > div:nth-child(7) > div > div > div.DesktopModal_body > div > form > div.TextField_textField > div > input',  phone, {delay: 100});

await page.click('body > div:nth-child(7) > div > div > div.DesktopModal_body > div > form > div.DesktopConfirm_footer > button');


};
module.exports.Parse = Parse;