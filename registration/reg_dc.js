async function Parse(page, number)
{

	page.goto("https://www.delivery-club.ru/moscow");

	await page.waitForNavigation();


	await page.click('body > div.wrap > div.header-wrapper > header > div.header-container > div.header__buttons-container');

	await page.waitFor(300);

	await page.type('body > div.wrap > div.header-wrapper > header > div.popup__overlay.login-popup > div > div.popup__body > div > div > div.login-popup__form > div.form-field > div:nth-child(1) > label > input', number, {delay: 20});

}

module.exports.Parse = Parse;