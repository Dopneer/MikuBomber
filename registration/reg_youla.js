async function Parse(page, number)
{

	await page.goto("https://youla.ru");

	await page.waitFor(100);

	await page.click('#app > div:nth-child(1) > div.sc-qWSYE.dzHTQo > header > div.sc-ptcDc.dEBuTq > div > section > div > div > div:nth-child(5)');

	await page.waitFor(1500);

	await page.type('#app > div:nth-child(2) > div.sc-jxcAmc.MgdIZ > div > span > div > div > div.sc-kcjSgA.bUmLfB > div > div.sc-pRfvo.jfeSxi > main > div > div.sc-qZsMW.cTpSpU > div.sc-oTmHo.gUKPMd.sc-psdaw.kJuZsX > div > input[type=tel]', number, {delay: 20});

	await page.click('#app > div:nth-child(2) > div.sc-jxcAmc.MgdIZ > div > span > div > div > div.sc-kcjSgA.bUmLfB > div > div.sc-pRfvo.jfeSxi > main > div > div.sc-qZsMW.cTpSpU > button');

}

module.exports.Parse = Parse;