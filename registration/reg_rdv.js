async function Parse( page, number)
{
    await page.goto("https://www.rendez-vous.ru/");

    await page.waitFor(500);

    await page.click('#header > div.header__middle.header__middle-main.header__middle_main-page > div > div > div.header__links.header__links-middle.flex-row.col-3 > div.header__link.mobile-hide.user-bar > div');

    await page.waitFor(200);

    var [button] = await page.$x("//a[contains(., 'Регистрация')]");
	if (button)
	{
    	await button.click();
	}

   	await page.click('#RegisterForm_phone');

   	await page.type('#RegisterForm_phone', number, {delay: 60});
   	await page.click('#registrForm > div > div:nth-child(6) > div.form-input-group > button');

}


module.exports.Parse = Parse;