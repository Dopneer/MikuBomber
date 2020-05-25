async function Parse( page, phone)
{
	
await page.goto("https://www.farpost.ru/sign");

await page.waitFor(100);

await page.click('#signForm > form > table > tbody > tr > td > div > div.controlBody > div.skinRadio > div:nth-child(2)');

await page.type('input[name="sign"]', "+7" + phone, {delay: 40});

await page.click('#signbutton');


}

async function Resend(page)
{

}



module.exports.Parse = Parse;