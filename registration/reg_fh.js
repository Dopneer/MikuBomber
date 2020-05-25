async function Parse(page, number)
{

	await page.goto("https://freelancehunt.ru/profile/register");

	await page.waitFor(100);


	await page.click('#profile_type-1');

	await page.type('input[id="phone-0"]', "+7" + number, {delay: 60});


	await page.click('#la_approved-0');
	await page.click('#save-0');

}

module.exports.Parse = Parse;