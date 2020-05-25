async function Parse(page, number)
{

	await page.goto("https://passport.pochta.ru/pc/ext/v2.0/form/signUp?callbackurl=https%3A%2F%2Fpassport.pochta.ru%2Foauth2%2Fauthorize%3Fclient_id%3Dh9ING4sB_FjPBzNgtuUCeWrSQA8a%26redirect_uri%3Dhttps%253A%252F%252Fwww.pochta.ru%252Fc%252Flogin%252Fpost_id_callback%26scope%3Dopenid%2Bemail%26state%3D%26response_type%3Dcode");

	await page.waitFor(100);

	await page.click('#telMask');

	await page.type('#telMask', number, {delay: 20});

	await page.click("#email");

	await page.type('#email', "TatyanasStyles4124984@gmail.com", {delay: 20});

	await page.click('#pwd');

	await page.type('#pwd', "FRj73#*f4hR3r3", { delay: 20 });

	await page.waitFor(500);

	await page.click('#layout-body > div > div.buttons-block > div.wrapper-button.reg-button');

}

module.exports.Parse = Parse;