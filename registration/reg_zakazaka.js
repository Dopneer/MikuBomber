async function Parse(page, number)
{

	page.goto("https://sochi.zakazaka.ru/");

	await page.waitFor(3000);

	try
	{
		await page.click('#modal > div.modal.modal-city.modal--open > div > div > a');
	}
	catch(e)
	{

	}

	await page.click("body > header > div.main-header_top.container.row > div.col.s-4.text-right > a.btn.btn--reg.js-get-modal");

	await page.type('input[name="name"]', "Tatyanaa", {delay: 60});
	await page.type('input[name="email"]', "TatyanasStyle22319654@gmail.com", {delay: 60});
	await page.click('#modal > div.modal.modal-registration.modal--open > div > div > form > div > div > input:nth-child(4)');
	await page.type('#modal > div.modal.modal-registration.modal--open > div > div > form > div > div > input:nth-child(4)', "Fj37F358#@*dfef`", {delay: 60});
	await page.click('#modal > div.modal.modal-registration.modal--open > div > div > form > div > div > input:nth-child(5)');
	await page.type('#modal > div.modal.modal-registration.modal--open > div > div > form > div > div > input:nth-child(5)', number, {delay: 60});


	await page.waitFor(500);

	await page.click('#modal > div.modal.modal-registration.modal--open > div > div > form > div > div > div > button');
	
	await page.waitFor(550);

	var [button] = await page.$x("//button[contains(., 'Зарегистрироваться')]");
	if (button)
	{
    	await button.click();
	}

}

module.exports.Parse = Parse;