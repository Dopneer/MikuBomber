async function Parse(page, number)
{

	await page.goto("https://www.instagram.com/accounts/emailsignup/");

	await page.waitFor(500);


	await page.type('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(4) > div > label > input', "+7" + number, {delay: 60});
	await page.type('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(5) > div > label > input', "Tatyana Olekseevna", {delay: 60});
	await page.type('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(6) > div > label > input', "TatyanasStyle2231964", {delay: 60});
	await page.type('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(7) > div > label > input', "Fj37FEf4f*#r4", {delay: 60});

	await page.click('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(8) > div > button');

	await page.waitFor(1000);
	


	await page.select('#react-root > section > main > div > article > div > div:nth-child(1) > div > div.Igw0E.IwRSH.eGOV_._4EzTm.bkEs3.DhRcB > div > div > span > span:nth-child(1) > select', '1');
	await page.select('#react-root > section > main > div > article > div > div:nth-child(1) > div > div.Igw0E.IwRSH.eGOV_._4EzTm.bkEs3.DhRcB > div > div > span > span:nth-child(2) > select', '1');
	await page.select('#react-root > section > main > div > article > div > div:nth-child(1) > div > div.Igw0E.IwRSH.eGOV_._4EzTm.bkEs3.DhRcB > div > div > span > span:nth-child(3) > select', '1983');
				
	await page.click('#react-root > section > main > div > article > div > div:nth-child(1) > div > div:nth-child(6) > div.Igw0E.IwRSH.eGOV_._4EzTm.lC6p0.g6RW6 > button');

}

module.exports.Parse = Parse;