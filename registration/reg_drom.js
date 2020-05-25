async function Parse( page, phone)
{
	await page.goto("https://my.drom.ru/sign");

	await page.waitFor(500);

	await page.click('#signForm > form > table > tbody > tr > td > div > div.controlBody > div.skinRadio > div:nth-child(2) > label');
	await page.type('#sign', phone , {delay: 60});
	await page.click('#signbutton');
}
module.exports.Parse = Parse;