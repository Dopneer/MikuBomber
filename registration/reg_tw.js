async function Parse(page, number)
{

	await page.goto("https://twitter.com/i/flow/signup");

	await page.waitFor(1000);


	await page.type('input[name="name"]', "Tatyana Alekseevna", {delay: 60});
	await page.type('input[name="phone_number"]', "+7" + number, {delay: 60});

	await page.waitFor(1500);

	await page.click('div[role="button"]');

	await page.waitFor(1500);

	var [button] = await page.$x("//span[contains(., 'Далее')]");
	if (button)
	{
    	await button.click();
	}


	[button] = await page.$x("//span[contains(., 'Зарегистрироваться')]");
	if (button)
	{
    	await button.click();
	}


	[button] = await page.$x("//span[contains(., 'ОК')]");
	if (button)
	{
    	await button.click();
	}



	

}

module.exports.Parse = Parse;