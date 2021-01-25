function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

async function Parse(page, number)
{

	page.goto("https://spb.zakazaka.ru/");

	email = "sfjiwefr";

	for(i = 0; i < 15; i++)
	{
		email += between(0, 9);
	}

	await page.waitFor(3000);

	var [btnn] = await page.$$('#modal > div.modal.modal-city.modal--open > div > div > button.btn.btn--dialog.btn--grey');

	if(btnn)
	{
		await btnn.click();
		await page.waitFor(500);
	}


	try
	{
		await page.click('#modal > div.modal.modal-city.modal--open > div > div > a');
	}
	catch(e)
	{

	}

	await page.click("body > header > div.main-header_top.container.row > div.col.s-4.text-right > a.btn.btn--reg.js-get-modal");

	await page.type('input[name="name"]', "Tatyanaa", {delay: 60});
	await page.type('input[name="email"]', email + "@gmail.com", {delay: 60});
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

	await page.waitFor(2000);

}

module.exports.Parse = Parse;