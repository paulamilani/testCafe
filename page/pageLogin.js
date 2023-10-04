import {t, Selector } from 'testcafe';

class Page {
    constructor () {
        this.nameInput      = Selector('#username');
        this.passwordInput  = Selector('#password');
        this.submitButton   = Selector('button').withText('Login');
    }

    async typeName(name) {
        await t.typeText(this.nameInput, name);
    }
    async typePassword(password){
        await t.typeText(this.passwordInput, password);
    }

    async clickSubmit() {
        await t.click(this.submitButton);
    }

}

export default new Page();