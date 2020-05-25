async function Parse( page, phone)
{
	await page.goto("https://account.mail.ru/signup?from=main&rf=auth.mail.ru");

	await page.waitFor(500);

	await page.click('#fname');
	await page.type('input[name="fname"', "Dora", {delay: 60});
	await page.type('input[name="lname"', "Dyra", {delay: 60});

	var [button] = await page.$x("//span[contains(., 'День')]");
	if (button)
	{
    	await button.click();
	}
	 [button] = await page.$x("//span[contains(., '2')]");
	if (button)
	{
    	await button.click();
	}
	 [button] = await page.$x("//span[contains(., 'Месяц')]");
	if (button)
	{
    	await button.click();
    }
     [button] = await page.$x("//span[contains(., 'Февраль')]");
	if (button)
	{
    	await button.click();
    }
     [button] = await page.$x("//span[contains(., 'Год')]");
	if (button)
	{
    	await button.click();
    }
     [button] = await page.$x("//span[contains(., '1984')]");
	if (button)
	{
    	await button.click();
    }

    await page.click('body > div.page-content > div:nth-child(3) > div.c0115.c0117.c0129 > div > div > form > div:nth-child(8) > div:nth-child(2) > div > label:nth-child(3) > div.c0194 > div.c0196');
    await page.type('#aaa__input' ,"TatyanasStyle22319654@gmail.com", {delay: 60});
    await page.type('#passwordField',"TaTyAnAshLyxa228", {delay: 60});
    await page.type('#repeatPasswordField' ,"TaTyAnAshLyxa228", {delay: 60});
    await page.type('input[id="phone-number__phone-input"]', phone , {delay: 60});

    await page.click('body > div.page-content > div:nth-child(3) > div.c0115.c0117.c0129 > div > div > form > button > span');

};
module.exports.Parse = Parse;