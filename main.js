const fs = require('fs'); //File System
const puppeteer = require('puppeteer');

debug = false; // Debug mode
headless = false;
delay = 0; // Delay between SMS

// Import moduless
sites =
[
	require("./registration/reg_dc"),
	require("./registration/reg_vk"),
	require("./registration/reg_ok"),
	require("./registration/reg_fh"),
	require("./registration/reg_ed"),
	require("./registration/reg_pg"),
	require("./registration/reg_mv"),
	require("./registration/reg_fap"),
	require("./registration/reg_mail"),
	require("./registration/reg_drom"),
	require("./registration/reg_instagram"),
	require("./registration/reg_youla"),
	require("./registration/reg_google"),
	require("./registration/reg_zakazaka"),
	require("./registration/reg_porussia")
]

debug_sites =
[

]



phones = fs.readFileSync("assets/phones.txt").toString().split('\n');

for(var i = 0; i < phones.length; i++)
{
	if(phones[i] == "")
	{
		phones.splice(i, 1);
		i--;
	}
	else if(phones[i][0] == "+" && phones[i][1] == "7")
	{
		phones[i] = phones[i].slice(2);
	}
	
}

if(phones.length < 1)
{
	console.log("There are no correct numbers into assets/numbers.txt");
}

proxies = fs.readFileSync("assets/proxies.txt").toString().split('\n');

main();

async function main()
{

	if(debug)
	{
		sites = debug_sites;
	}

	for(var i = 0; i < phones.length; i++)
	{
		proxy = proxies[i % proxies.length];
		console.log(proxy);

		// Open new browser for each phone
		// Then parse sites (without async)
		ParseSites(await puppeteer.launch({ headless: headless, args: [ '--proxy-server=' + proxy ] }), phones[i]);

	}

}

// Only one phone
async function EboboMode(phone)
{
	pages = []
	browser = await puppeteer.launch({ headless: true }); // Headless important

	for(var i = 0; i < debug_sites.length; i++)
	{
		
		pages[i] = await browser.newPage();

	}


	for(var i = 0; i < debug_sites.length; i++)
	{

		try
		{
			debug_sites[i].Parse(pages[i], phone);
		}
		catch(e)
		{
			if(debug)
			{
				console.log('\033[2J');
				console.log(e);
				return;
			}
		}
	}
}

async function ParseSites(browser, phone)
{

	var page = await browser.newPage();

	page.on("dialog", (dialog) => {
  console.log("dialog");
  dialog.accept();
});

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
				console.log('\033[2J');
				console.log(e);
				continue;
				if(debug)
				{
					console.log('\033[2J');
					console.log(e);
				}
			}
		}

	}

}