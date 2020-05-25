async function Parse(page, number)
{

	await page.goto("https://www.avito.ru/sochi");

	await page.waitFor(100);

	await page.click('body > div.js-single-page.single-page > div.index-header-2qEhu.index-stickyHeader-2gJGM > div:nth-child(1) > div > div > div > div.header-services-menu-item_username-PkxRh > a');

	await page.waitFor(250);

	await page.click('a[href="/registration"]');

	await page.waitFor(250);

	await page.click('input[name="username"]');

	await page.type('input[name="username"]', number, {delay: 150});

	await page.click('button[data-marker="registration-form/button"]');

}

module.exports.Parse = Parse;