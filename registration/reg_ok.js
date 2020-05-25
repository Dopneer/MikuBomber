async function Parse( page, phone)
{
 await page.goto("https://ok.ru/dk?st.cmd=anonymRegistrationEnterPhone");

 await page.waitFor(100);

 await page.type('input[id="field_phone"]', phone, {delay: 100});

 await page.click('#hook_Block_AnonymRegistrationEnterPhone > div > div.portlet.ext-registration_portlet > div.ext-registration_hld > div > form > div.form-actions.mt-5x > input');


};
module.exports.Parse = Parse;