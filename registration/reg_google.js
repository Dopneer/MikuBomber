async function Parse(page, number)
{

	await page.goto("https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount%3Fnc%3D1&hl=ru&flowName=GlifWebSignIn&flowEntry=SignUp");

	await page.waitFor(100);


	await page.type('#firstName', "Tatyana", {delay: 60});
	await page.type('#lastName', "Olekseevna", {delay: 60});

	await page.type('#username', "yalublyusoba4ek228", {delay: 60});


	await page.type('#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input', "Fdew@edFE#d1233", {delay: 60});
	await page.type('#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input', "Fdew@edFE#d1233", {delay: 60});


	await page.click('#accountDetailsNext');

	await page.waitFor(2500);


	await page.type('#phoneNumberId', "+7" + number, {delay: 60});

	await page.click('#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div.qhFLie > div');

}

module.exports.Parse = Parse;