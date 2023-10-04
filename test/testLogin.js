import page from '../page/pageLogin'

fixture `Use a Page Model`
    .page`http://the-internet.herokuapp.com/login`;


test('Sucess Login', async () => {

    await page.typeName('tomsmith');
    await page.typePassword('uperSecretPassword!')
    await page.clickSubmit();

});

