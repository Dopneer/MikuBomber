async function Parse(page, number)
{

	await page.goto("https://www.mvideo.ru/login");

	await page.waitFor(100);

	await page.click('#phone-verification-submit');

	await page.type('#phone-verification-submit', number, {delay: 20});

	await page.click('#phone-verification-submit > div > div.c-phone-verification__confirm.u-mt-20 > button');

}

module.exports.Parse = Parse;