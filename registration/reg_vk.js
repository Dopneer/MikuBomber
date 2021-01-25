async function Parse(page, number)
{

	await page.goto("https://vk.com/");

	await page.waitFor(100);


	await page.type('input[id="ij_first_name"]', "Tatyana", {delay: 60});
	await page.type('input[id="ij_last_name"]', "Olekseevna", {delay: 60});

	await page.click('#container1 > table > tbody > tr > td.selector > input.selector_input.selected');
	await page.click('#option_list_options_container_1_6');


	await page.click('#container2 > table > tbody > tr > td.selector > input.selector_input.selected');
	await page.click('#option_list_options_container_2_4');


	await page.click('#container3 > table > tbody > tr > td.selector > input.selector_input.selected');
	await page.click('#option_list_options_container_3_18');


	await page.click('#ij_submit');
	try
	{
	await page.click('#ij_sex_row > div.radiobtn.on');
	await page.click('#ij_submit');
	}
	catch(e)
	{

	}

	await page.waitFor(150);

	await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

	await page.type('input[id="join_phone"]', number, {delay: 60});

	try
	{
		await page.click('#join_accept_terms_checkbox > div.checkbox');
	}
	catch(e)
	{
		
	}

	await page.waitFor(50);

	await page.click('#join_send_phone');

	await page.waitFor(500);


}

module.exports.Parse = Parse;