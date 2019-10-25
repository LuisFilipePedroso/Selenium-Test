const chrome = require('selenium-webdriver/chrome');
const { Builder, By } = require('selenium-webdriver');
const geckoDriverPath = require('chromedriver').path;


let service = new chrome.ServiceBuilder(geckoDriverPath).build();
chrome.setDefaultService(service);

(async function example() {

    const caps = {
        browserName: 'chrome',
    }

    let driver = await new Builder()
        .withCapabilities(caps)
        .build();

    try {
        await driver.get('https://sig.ifc.edu.br/sigaa/verTelaLogin.do');
        const searchForm = await driver.findElement(By.tagName('form'))
        const name = await searchForm.findElement(By.name('user.login'));
        name.sendKeys('');
        const pass = await searchForm.findElement(By.name('user.senha'));
        pass.sendKeys('')
        const button = await searchForm.findElement(By.xpath("//input[@type='submit' and @value='Entrar']"))
        await button.click()

        await driver.findElement(By.xpath("//form[@id = 'form_acessarTurmaVirtualj_id_1']/a")).click()
        await driver.findElement(By.xpath("//div[@id = 'formMenu:j_id_jsp_1375300775_70']/div[1]")).click()
        await driver.findElement(By.xpath("//div[@id = 'formMenu:j_id_jsp_1375300775_70']/div[@class='rich-panelbar-content-exterior']//td/a[3]"))
            .click()

    } finally {
        console.log('Finished')
        // await driver.quit();
    }
})();