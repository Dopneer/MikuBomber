const fs = require('fs'); //File System


dc = require("./registration/reg_dc");
vk = require("./registration/reg_vk");
ok = require("./registration/reg_ok");
fh = require("./registration/reg_fh");
ed = require("./registration/reg_ed");
tw = require("./registration/reg_tw");
pg = require("./registration/reg_pg");
mv = require("./registration/reg_mv");
rdv = require("./registration/reg_rdv");
fap = require("./registration/reg_fap");
mail = require("./registration/reg_mail");
drom = require("./registration/reg_drom");
insta = require("./registration/reg_instagram");
youla = require("./registration/reg_youla");
google = require("./registration/reg_google");
zakazaka = require("./registration/reg_zakazaka");
porussia = require("./registration/reg_porussia");

sites =
[
	dc,
	vk,
	ok,
	ed,
	tw,
	pg,
	mv,
	rdv,
	fap,
	drom,
	insta,
	zakazaka,
	porussia,
]


const puppeteer = require('puppeteer');

phones =
[
	// Enter numbers in format (xxx) xxx-xx-xx
	// Without +7. Only Russian numbers
	"9384402893",
	"9990232412",
	"9231312858"
	// Example, do not DDoS pls
]
delay = 5000;


(async () =>
{

for(var i = 0; i < phones.length; i++)
{


	ParseSites(await puppeteer.launch({ headless: false }), phones[i]);
}


})();



async function ParseSites(browser, phone)
{

var page = await browser.newPage();

await page.setViewport({
    width: 1080,
    height: 720
});

while(true)
{

	for(var i = 0; i < sites.length; i++)
	{
		try
		{
		await sites[i].Parse(page, phone);
		await page.waitFor(delay);
		}
		catch(e)
		{

		}
	}

}

}