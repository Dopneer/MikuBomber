async function Parse(page, number)
{

	await page.goto("https://youla.ru/");

	await page.waitFor(100);

	await page.click('#app > div:nth-child(1) > div.sc-ptScb.hiXOjf > header > div.sc-pkvSM.fLPQzZ > div > section > div > div > div:nth-child(5) > a > span');

	await page.waitFor(2000);

	await page.type('#app > div:nth-child(2) > div.sc-kOGAsw.isqyNh > div > span > div > div > div.sc-jIdpwp.ljKLPe > div > div.sc-pdizT.eJZqeQ > main > div > div.sc-pTSRm.cJMMUy > div.sc-qYhTA.leqCFd.sc-pCZIY.iJyzkP > div > input[type=tel]', number, {delay: 20});

	await page.click('#app > div:nth-child(2) > div.sc-kOGAsw.isqyNh > div > span > div > div > div.sc-jIdpwp.ljKLPe > div > div.sc-pdizT.eJZqeQ > main > div > div.sc-pTSRm.cJMMUy > button > span');

}

module.exports.Parse = Parse;