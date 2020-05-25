async function Parse( page, phone)
{
	await page.goto("https://aliexpress.ru/");

	await page.waitFor(500);

	try
    {
        await page.click('body > div.ui-window.ui-window-normal.ui-window-transition.ui-newuser-layer-dialog > div > div > a');
    }
    catch(e)
    {

    }

	await page.click('#nav-user-account');
	await page.click('#nav-user-account > div > div > p.flyout-bottons > a.join-btn');
	await page.type('#ws-xman-register-phone', phone , {delay: 60});
	await page.click('#send-sms-code-submit');

	await page.waitFor(500);

	var sliderElement = await page.$('#nc_1__scale_text > span');//Суда селектор всего поля
	var slider = await sliderElement.boundingBox();//
	var sliderHandle = await page.$('#nc_1_n1z');//Суда селектор квадрата который нада передвинуть
	var handle = await sliderHandle.boundingBox();

	await page.mouse.move(handle.x + handle.width / 2, handle.y + handle.height / 2);//переносит мышку в середину экрана 
	await page.mouse.down();//нажимает мышку тип как click ток падругому
	await page.mouse.move(handle.x + slider.width, handle.y + handle.height / 2, { steps: 50 });// переводит мышку в право на 20 шагов. !!!Важно!!! иногда шагов слишком мало так шо следи
	await page.waitFor(3000);
	await page.mouse.up();//отжимает мышку

	await page.waitFor(500);

	await page.click('#send-sms-code-submit');




}
module.exports.Parse = Parse;