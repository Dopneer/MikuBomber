async function Parse(page, number)
{

	page.goto("https://www.delivery-club.ru/");

	await page.waitFor(5000);


	await page.click('body > div > header > div.header-container > div.header__buttons-container > button');

	await page.type('body > div > header > div.popup__overlay.login-popup > div > div.popup__body > div > div > div.login-popup__form > div.form-field > div:nth-child(1) > label > input', number, {delay: 20});

}

module.exports.Parse = Parse;