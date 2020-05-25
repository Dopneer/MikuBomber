async function Parse( page, phone)
{
 await page.goto("https://passport.yandex.ru/registration");

 await page.waitFor(100);//задержка для загрузки сайта

 await page.type('#firstname',"Gosha", {delay: 60});

 await page.type('#lastname', "Pidor", {delay: 60});

 await page.type('#login', "Etotochnologin",{delay: 60});

 await page.type('#password', "Password_bleat",{delay: 60});

 await page.type('#password_confirm', "Password_bleat",{delay: 60});

 await page.click('#phone');

 await page.type('#phone', phone ,{delay: 60});

 await page.click('#root > div > div.grid > div > main > div > div > div > form > div.human-confirmation-wrapper.can-switch > div > div:nth-child(2) > div > div > button');


};
module.exports.Parse = Parse;//Без этой параши нифига работать не буит создает переменную Parse