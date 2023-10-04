import page from '../page/pageLogin'

const data = require('./dados.json');

fixture `Use a Data-Driven`
    .page`http://the-internet.herokuapp.com/login`;

data.forEach(dado => {
    test('Sucess Login', async t => {
        await page.typeName(dado.user);
        await page.typePassword(dado.password)
        await page.clickSubmit();
    });
    test('Fail Password Login', async t => {
        await page.typeName(dado.userFail);
        await page.typePassword(dado.passwordFail)
        await page.clickSubmit();
    });
    
});


